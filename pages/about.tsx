import { useEffect } from "react";

export default function Profiles() {
  useEffect(() => {
    document.title = "SideNote | About";
  }, []);

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Not implemented yet
        </h1>
      </div>
    </div>
  );
}