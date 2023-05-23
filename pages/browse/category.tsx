import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import useCategory from "@/hooks/useCategory";

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
  const { data: adventure = [] } = useCategory("Adventure");
  const { data: action = [] } = useCategory("Action");
  const { data: anime = [] } = useCategory("Anime");
  const { data: crime = [] } = useCategory("Crime");
  const { data: drama = [] } = useCategory("Drama");
  const { data: romance = [] } = useCategory("Romance");
  const { data: sciencefiction = [] } = useCategory("ScienceFiction");
  const { data: thriller = [] } = useCategory("Thriller");
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />

      <div className="pb-40 ml-8">
        <br id = "Anime" className="" />
        <MovieList title="Anime" data={anime} /> <br />
        <br id = "Adventure" className="" />
        <MovieList title="Adventure" data={adventure} /> <br />
        <br id = "Action" className="mt-10" />
        <MovieList title="Action" data={action} />
        <br id = "Crime" className="mt-10" />
        <MovieList title="Crime" data={crime} />
        <br id = "Drama" className="mt-10" />
        <MovieList title="Drama" data={drama} />
        <br id = "Romance" className="mt-10" />
        <MovieList title="Romance" data={romance} />
        <br id = "Science-Fiction" className="mt-10" />
        <MovieList title="Science-Fiction" data={sciencefiction} />
        <br id = "Thriller" className="mt-10" />
        <MovieList title="Thriller" data={thriller} />
      </div>
    </>
  );
}
