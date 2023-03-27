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
  const { data: japanese = [] } = useCategory("Japanese");
  const { data: hollywood = [] } = useCategory("Hollywood");
  const { data: classics = [] } = useCategory("Classics");
  const { data: action = [] } = useCategory("Action");
  const { data: romance = [] } = useCategory("Romance");
  const { data: drama = [] } = useCategory("Drama");
  const { data: comedy = [] } = useCategory("Comedy");
  const { data: sciencefiction = [] } = useCategory("ScienceFiction");
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
