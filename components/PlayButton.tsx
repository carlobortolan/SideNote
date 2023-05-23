import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface PlayButtonProps {
  trailerId: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({ trailerId }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/watch/${trailerId}`)}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition"
    >
      <BsFillPlayFill className="mr-1" size={20} />
      Play
    </button>
  );
};

export default PlayButton;
