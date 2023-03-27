import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import useLatest from "@/hooks/useLatest";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

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
  const { data: movies = [] } = useLatest();
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pb-40 ml-8">
        <br></br>
        <br></br>
        <br></br>
        <MovieList title="Latest movies" data={movies} />
      </div>
    </>
  );
}
