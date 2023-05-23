import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data } = useMovie(movieId);
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (divRef.current && divRef.current.contains(event.target) && divRef2.current && !divRef2.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClose]);


  if (!visible) {
    return null;
  }

  return (
    <div ref={divRef} className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
      <div
        ref={divRef2}
        className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden"
      >
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
              autoPlay
              muted
              loop
              className="w-full brightness-[60%] object-cover h-full"
            ></video>
            <div
              onClick={handleClose}
              className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center"
            >
              <AiOutlineClose className="text-white" size={20} />
            </div>
            <div className="absolute bottom-[10%] left-10">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>
              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-12 pt-8">
            <div className="flex flex-row items-center gap-2 mb-8">
              <p className="text-green-400 font-semibold text-lg">
                {data?.release_year}
              </p>
              <p className="text-white text-lg">
                {data?.duration + " minutes"}
              </p>
              <p className="text-white text-lg font-semibold italic">
                {data?.genre}
              </p>
            </div>
            <p className="text-white text-lg">{data?.description}</p>
          </div>
          <div className="px-12 py-8">
            {data?.directed_by?.[0] ? (
              <p className="text-white text-lg font-semibold">
                Directed by:{" "}
                <span className="text-md font-light italic">
                  {" "}
                  {data.directed_by.join(", ")}
                </span>
              </p>
            ) : null}
            {data?.written_by?.[0] ? (
              <p className="text-white text-lg font-semibold">
                Written by:{" "}
                <span className="text-md font-light italic">
                  {" "}
                  {data.written_by.join(", ")}
                </span>
              </p>
            ) : null}
            {data?.starring?.[0] ? (
              <p className="text-white text-lg font-semibold">
                Starring:{" "}
                <span className="text-md font-light italic">
                  {" "}
                  {data.starring.join(", ")}
                </span>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
