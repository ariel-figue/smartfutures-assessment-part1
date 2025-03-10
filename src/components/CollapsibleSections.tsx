import React, { useState } from "react";

// Define props for the CollapsibleSection component
interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean; // Optional prop to set initial state
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleSection = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-6 border rounded-lg shadow-md">
      <button
        onClick={toggleSection}
        className="w-full text-left p-4 text-xl font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 flex justify-between items-center"
      >
        <span>{title}</span>
        <span>{isOpen ? "▼" : "▶"}</span>
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;