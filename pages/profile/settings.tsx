import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import axios from "axios";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return { props: {} };
}


const Settings = () => {
  const { data: user } = useCurrentUser();
  const router = useRouter();

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Account settings
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10"></div>
        <div onClick={() => router.push("/")}>
          <div className="group flex-row w-44 mx-auto">
            <div className="mt-4 text-gray-400 text-2xl text-center">
              <div
                onClick={() => signOut()}
                className="cursor-pointer transition text-center text-white active:text-gray-400 hover:text-gray-300 hover:underline hover:translate-y-[-2px] transition-transform duration-200"
              >Delete Account</div>
              <div
                onClick={() => signOut()}
                className="cursor-pointer transition py-5 text-center text-white active:text-gray-400 hover:text-gray-300 hover:underline hover:translate-y-[-2px] transition-transform duration-200"
              >Change Name</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>



  );
};

export default Settings;
