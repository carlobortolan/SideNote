import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer active:text-gray-400 hover:text-gray-300 transition hover:underline hover:translate-y-[-2px] transition-transform duration-200">
      {label}
    </div>
  );
};

export default NavbarItem;
