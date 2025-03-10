import React, { useState, useEffect } from "react";

// Change #1: Improved Counter component with TypeScript definition and best practices
const Counter: React.FC = () => {
  // Change #2: Initialized counter state directly with 0, removing redundant let count variable, that was used only to assign the initial value
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Change #3: Replaced setTimeout with setInterval for continuous increment every second
    const intervalId = setInterval(() => {
      // Change #4: Used functional update to ensure the latest state is used for increment
      setCounter((prev) => prev + 1);
    }, 1000);

    // Change #5: Added cleanup to clearInterval on unmount, preventing memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures effect runs only once (on mount)

  // Change #6: Extracted increment logic into a named function for better readability
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center gap-2 pt-8 pb-20">
    {/* Change #7: added className for styling + used Tailwind CSS */}
      <p className="text-lg font-semibold">Count: {counter}</p>
      <button
        onClick={handleIncrement}
        className="px-4 py-2 bg-[#026B6E] text-white rounded hover:opacity-80"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;