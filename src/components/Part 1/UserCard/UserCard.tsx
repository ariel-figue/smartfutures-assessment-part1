import React, { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { User } from "../../../types";
import LoadingSkeleton from "../LoadingSkeleton";

// Define props interface for type safety and clarity
interface UserCardProps {
  user: User; // User data to display
  isLoading?: boolean; // Optional prop to control external loading state
}

const UserCard: React.FC<UserCardProps> = ({ user, isLoading = false }) => {
  const [showEmail, setShowEmail] = useState(false); // Controls email visibility
  const [isForcedLoading, setIsForcedLoading] = useState(true); // Simulates initial loading delay

  // Toggle email visibility on button click
  const toggleEmail = () => setShowEmail((prev) => !prev);

  // Simulate a loading delay of 1.5 seconds on mount for UX demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsForcedLoading(false); // End forced loading after delay
    }, 1500);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []); // Runs only once on component mount

  // Show loading skeleton if either forced or external loading is active
  if (isForcedLoading || isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="border rounded-lg shadow-md m-2 p-4 w-64 h-[250px] bg-white transition-all duration-300">
      <div className="w-full flex justify-center items-center">
        <img
          src={user.avatarUrl}
          alt={`${user.name}'s profile`}
          className="w-16 h-16 rounded-full object-cover mb-4 text-xs"
        />
      </div>
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {user.name}
      </h2>
      {showEmail && (
        <p className="text-md text-gray-600 font-medium mt-2 text-center transition-opacity duration-200">
          {user.email}
        </p>
      )}
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleEmail}
          className="px-4 py-2 bg-[#026B6E] text-white rounded hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
        >
          {showEmail ? "Hide Details" : "Toggle Details"}
        </button>
      </div>
    </div>
  );
};

export default UserCard;