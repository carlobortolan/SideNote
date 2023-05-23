import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import TrailerList from "@/components/TrailerList";
import useTrailerList from "@/hooks/useTrailerList";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import { useEffect } from "react";

export async function getServerSideProps(context: NextPageContext) {
  if (!(await getSession(context))) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
  return { props: {} };
}

export default function Home() {
  useEffect(() => {
    document.title = "SideNote";
  }, []);

  const { data: trailers = [] } = useTrailerList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <TrailerList title="My List" data={favorites} />
        <TrailerList title="Trending Now" data={trailers} />
      </div>
    </>
  );
}
