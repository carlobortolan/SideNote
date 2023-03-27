import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
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
  const { data: japanese = [] } = useFavorites("japanese");
  const { data: hollywood = [] } = useFavorites("hollywood");
  const { data: classics = [] } = useFavorites("classics");
  const { data: action = [] } = useFavorites("action");
  const { data: romance = [] } = useFavorites("romance");
  const { data: drama = [] } = useFavorites("drama");
  const { data: comedy = [] } = useFavorites("comedy");
  const { data: sciencefiction = [] } = useFavorites("sciencefiction");
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />

      <div className="pb-40 ml-8">
        <br></br>
        <br></br>
        <br></br>
        <MovieList title="Japanese" data={japanese} /> <br />
        <MovieList title="Hollywood" data={hollywood} /> <br />
        <MovieList title="Classics" data={classics} />
        <br />
        <MovieList title="Action" data={action} />
        <br />
        <MovieList title="Romance" data={romance} />
        <br />
        <MovieList title="Drama" data={drama} />
        <br />
        <MovieList title="Comedy" data={comedy} />
        <br />
        <MovieList title="Science-Fiction" data={sciencefiction} />
      </div>
    </>
  );
}
