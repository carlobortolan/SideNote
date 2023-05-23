import React from "react";
import router from "next/router";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">
        <div onClick={() => router.push(`/`)} className="px-3 text-center text-white active:text-gray-400 hover:text-gray-200 hover:underline hover:translate-y-[-2px] transition-transform duration-200" >Home</div>
        <div onClick={() => router.push(`/browse/trailers`)} className="px-3 text-center text-white active:text-gray-400 hover:text-gray-300 hover:underline hover:translate-y-[-2px] transition-transform duration-200">Films</div>
        <div onClick={() => router.push(`/browse/latest`)} className="px-3 text-center text-white active:text-gray-400 hover:text-gray-300 hover:underline hover:translate-y-[-2px] transition-transform duration-200">New & Popular</div>
        <div onClick={() => router.push(`/browse/my-list`)} className="px-3 text-center text-white active:text-gray-400 hover:text-gray-300 hover:underline hover:translate-y-[-2px] transition-transform duration-200">My List</div>
        <div onClick={() => router.push(`/browse/category`)} className="px-3 text-center text-white active:text-gray-400 hover:text-gray-300 hover:underline hover:translate-y-[-2px] transition-transform duration-200">Browse by category</div>
      </div>
    </div>
  );
};

export default MobileMenu;
