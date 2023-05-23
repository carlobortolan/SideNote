import { signOut } from "next-auth/react";

import React from "react";

import useCurrentUser from "@/hooks/useCurrentUser";
import router from "next/router";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div
        className="flex flex-col gap-3"
        onClick={() => router.push(`/profiles`)}
      >
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src={currentUser?.image} alt="" />
          <p className="text-white text-sm group-hover/item:underline">
            {currentUser?.name}
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => router.push(`/profile/settings`)}
        className="px-3 text-center text-white text-sm hover:underline transition hover:underline hover:translate-y-[-2px] transition-transform duration-200"
      >
        Account Settings
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={() => signOut()}
        className="px-3 text-center text-white text-sm hover:underline transition hover:underline hover:translate-y-[-2px] transition-transform duration-200"
      >
        Sign out of SideNote
      </div>
    </div>
  );
};

export default AccountMenu;
