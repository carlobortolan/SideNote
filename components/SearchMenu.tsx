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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  if (!visible)
    return (
      //   <BsSearch className="text-gray-200 hover:text-gray-300 cursor-pointer transition hover:underline hover:translate-y-[-2px] transition-transform duration-200" />
      null
    );

  return (
    <div className="text-gray-200">
      <div className="bg-black flex flex-row items-center bg-opacity-50 border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 pr-2 mr-2 rounded-lg">
        <input
          type="text"
          placeholder="Titles, people, genres"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-black flex flex-row items-center bg-opacity-50  text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 px-4 py-1.5 mr-2 rounded-lg"
        >
        </input>
        <BsSearch onClick={handleSearch} className="text-gray-200 hover:text-blue-400 -400 cursor-pointer transition hover:underline hover:translate-y-[-2px] transition-transform duration-200" />
        {/* <button
          onClick={handleSearch}
          className="flex items-center justify-center bg-blue-500 rounded-lg px-6 py-1.5 text-white hover:bg-yellow-300 focus:outline-none"
        >
          <BsSearch size={20} />
        </button> */}
      </div>
    </div>
  );
};
export default SearchMenu;
