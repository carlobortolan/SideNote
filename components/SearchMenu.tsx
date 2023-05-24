import React, { useState } from "react";
import router from "next/router";
import { BsSearch } from "react-icons/bs";

interface SearchMenuProps {
  visible?: boolean;
}

const SearchMenu: React.FC<SearchMenuProps> = ({ visible }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    router.push(`/search?query=${searchTerm}`);
  };

  if (!visible) return (
    <BsSearch
    className="text-gray-200 hover:text-gray-300 cursor-pointer transition hover:underline hover:translate-y-[-2px] transition-transform duration-200"
  />
  );

  return (
    <div className="text-gray-200">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Titles, people, genres"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-black bg-opacity-50 border border-gray-300 text-white placeholder-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 mr-2"
        />
        <button
          onClick={handleSearch}
          className="flex items-center justify-center bg-blue-500 rounded-lg px-6 py-2 text-white hover:bg-yellow-300 focus:outline-none"
        >
          <BsSearch size={20} />
        </button>
      </div>
    </div>
  );
};
export default SearchMenu;
