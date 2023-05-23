import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import TrailerList from "@/components/TrailerList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import useFavorites from "@/hooks/useFavorites";
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

export default function MyList() {
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal();
  useEffect(() => {
    document.title = "SideNote | My List";
  }, []);
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />

      <div className="pb-40 ml-8">
        <br></br>
        <br></br>
        <br></br>
        <TrailerList title="My List" data={favorites} /> <br />
      </div>
    </>
  );
}
