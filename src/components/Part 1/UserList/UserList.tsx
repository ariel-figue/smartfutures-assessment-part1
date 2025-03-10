import React, { useState, useEffect } from "react";
import { useQuery, gql, ApolloError } from "@apollo/client";
import { UsersResponse, User } from "../../../types";
import UserCard from "../UserCard/UserCard";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingSkeleton from "../LoadingSkeleton";

// Define GraphQL query to fetch users with pagination and search capabilities
const GET_USERS = gql`
  query GetUsers($page: Int, $search: String) {
    users(page: $page, search: $search) {
      users {
        name
        email
        profilePicture
      }
      totalUsers
      totalPages
      currentPage
    }
  }
`;

const UserList: React.FC = () => {
  const [page, setPage] = useState(1); // Current page for pagination
  const [searchInput, setSearchInput] = useState(""); // Raw input from search field
  const [searchQuery, setSearchQuery] = useState(""); // Debounced search term for query
  const [allUsers, setAllUsers] = useState<User[]>([]); // Accumulated list of users

  // Fetch users with Apollo useQuery hook
  const { data, loading, error, refetch } = useQuery<UsersResponse>(GET_USERS, {
    variables: { page, search: searchQuery },
    fetchPolicy: "network-only", // Ensure fresh data on each request
    notifyOnNetworkStatusChange: true, // Update loading state on refetch
  });

  // Update user list when new data is received from the query
  useEffect(() => {
    if (data?.users && !loading) {
      setAllUsers((prevUsers) => {
        // Reset users on page 1, append on subsequent pages
        const newUsers = page === 1 ? data.users!.users : [...prevUsers, ...data.users!.users];
        return newUsers;
      });
    }
  }, [data, loading, page, searchQuery]);

  // Debounce search input to avoid excessive queries and trigger refetch
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchQuery(searchInput);
      setPage(1); // Reset to first page on new search
      setAllUsers([]); // Clear existing users for new search results
      refetch({ page: 1, search: searchInput });
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or change
  }, [searchInput, refetch]);

  // Handle search input changes from the user
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Show loading skeletons only on initial load (page 1)
  if (loading && page === 1) {
    return (
      <div className="w-full flex justify-center items-center text-center">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
    );
  }

  // Display error message if query fails
  if (error) {
    return (
      <p className="text-center text-red-500 w-full">
        Error: {(error as ApolloError).message}
      </p>
    );
  }

  // Determine if more pages are available for infinite scroll
  const hasMore =
    data?.users?.currentPage != null && data?.users?.totalPages != null
      ? data.users.currentPage < data.users.totalPages
      : false;

  return (
    <div className="2-full mx-auto p-6">
      <div className="mb-6">
        <input
          type="text"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search users by name..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Display user count and pagination info if data is available */}
      {allUsers.length > 0 && data?.users && (
        <p className="text-center text-gray-500 mb-4">
          Showing {allUsers.length} of {data.users.totalUsers || 0} users (Page{" "}
          {data.users.currentPage || 1} of {data.users.totalPages || 1})
        </p>
      )}

      <InfiniteScroll
        dataLength={allUsers.length}
        next={() => setPage((prev) => prev + 1)} // Load next page on scroll
        hasMore={hasMore}
        loader={<p className="text-center text-gray-600 py-4 mt-12 mb-[120px]">Scroll to load more users...</p>}
        endMessage={
          allUsers.length > 0 ? (
            <p className="text-center text-gray-500 py-4">No more users to load</p>
          ) : (
            <p className="text-center text-gray-500 py-4">No users found</p>
          )
        }
        style={{ overflow: "auto" }}
        height={400}
        scrollThreshold={0.9}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allUsers.map((user) => (
            <UserCard key={user.email} user={user} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UserList;