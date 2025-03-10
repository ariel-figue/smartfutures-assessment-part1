import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { User } from "../types";

// Define the GraphQL schema with pagination metadata
const typeDefs = `#graphql
  type User {
    name: String!
    email: String!
    profilePicture: String!
  }

  type UsersResponse {
    users: [User]!
    totalUsers: Int!
    totalPages: Int!
    currentPage: Int!
  }

  type Query {
    users(page: Int, search: String): UsersResponse!
  }
`;

// Define resolvers
const resolvers = {
  Query: {
    users: (_: any, { page, search }: { page?: number; search?: string }) => {
      // Mock data with 12 users
      const allUsers: User[] = [
        {
          name: "Ariel Figueroa",
          email: "contact@ariel-figueroa.com",
          profilePicture: "./user1.png",
        },
        {
          name: "John Doe",
          email: "john.doe@example.com",
          profilePicture: "./user2.png",
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          profilePicture: "./user3.png",
        },
        {
          name: "Alice Brown",
          email: "alice.brown@example.com",
          profilePicture: "./user4.png",
        },
        {
          name: "Bob Johnson",
          email: "bob.johnson@example.com",
          profilePicture: "./user5.png",
        },
        {
          name: "Charlie Davis",
          email: "charlie.davis@example.com",
          profilePicture: "./user6.png",
        },
        // New users added below
        {
          name: "Maya Patel",
          email: "maya.patel@example.com",
          profilePicture: "./user7.png",
        },
        {
          name: "Liam Carter",
          email: "liam.carter@example.com",
          profilePicture: "./user8.png",
        },
        {
          name: "Sofia Nguyen",
          email: "sofia.nguyen@example.com",
          profilePicture: "./user9.png",
        },
        {
          name: "Ethan Brooks",
          email: "ethan.brooks@example.com",
          profilePicture: "./user10.png",
        },
        {
          name: "Olivia Kim",
          email: "olivia.kim@example.com",
          profilePicture: "./user11.png",
        },
        {
          name: "Noah Ali",
          email: "noah.ali@example.com",
          profilePicture: "./user12.png",
        },
      ];

      // Filter users by search term (case-insensitive)
      let filteredUsers = allUsers;
      if (search) {
        filteredUsers = allUsers.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
      }

      // Pagination logic with 3 results per page
      const pageSize = 3;
      const currentPage = page && page > 0 ? page : 1; // Ensure page is at least 1
      const totalUsers = filteredUsers.length;
      const totalPages = Math.ceil(totalUsers / pageSize);
      const start = (currentPage - 1) * pageSize;
      const end = Math.min(start + pageSize, totalUsers); // Prevent out-of-bounds

      // Slice the users for the current page
      const paginatedUsers = filteredUsers.slice(start, end);

      // Debug log to verify server response
      console.log(
        `Server - Page: ${currentPage}, Total Pages: ${totalPages}, Total Users: ${totalUsers}, Search: ${search}, Users:`,
        paginatedUsers
      );

      // Return the response with pagination metadata
      return {
        users: paginatedUsers,
        totalUsers,
        totalPages,
        currentPage,
      };
    },
  },
};

// Create and start the server without mocks
const server = new ApolloServer({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
});

async function startServer() {
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`🚀 Mock Server listening at: ${url}`);
  } catch (err) {
    console.error("Error starting mock server:", err);
  }
}

startServer();