import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function handleSubmit(e) {
  e.preventDefault();
  onSearch(searchTerm);
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center p-1 mb-4 border-b border-gray-800 text-gray-800 focus-within:text-white focus-within:border-gray-200"
    >
      <button type="submit">
        <FaSearch className="mr-2" />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-transparent text-gray-800 outline-none w-full placeholder:text-gray-800"
      />
    </form>
  );
};

export default SearchBar;
