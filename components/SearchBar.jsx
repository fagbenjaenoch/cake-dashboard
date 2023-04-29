import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex items-center p-1 mb-4 border-b border-gray-800 text-gray-800 ${
        isHovered && !isFocused && "text-gray-400 border-gray-400"
      }
      ${
        isHovered &&
        isFocused &&
        "placeholder:text-white text-gray-100 border-gray-200"
      }
      ${isFocused && "placeholder:text-white text-gray-100 border-gray-200"}
      `}
    >
      <button type="submit">
        <FaSearch className="mr-2" />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={`bg-transparent text-gray-800 outline-none w-full placeholder:text-gray-800 text-gray-100 ${
          isHovered && !isFocused && "placeholder:text-gray-500"
        } ${isHovered && isFocused && "placeholder:text-white"} ${
          isFocused && "placeholder:text-white"
        }`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </form>
  );
};

export default SearchBar;
