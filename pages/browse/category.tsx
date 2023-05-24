import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import TrailerList from "@/components/TrailerList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import useCategory from "@/hooks/useCategory";
import { useEffect } from "react";
import Footer from "@/components/Footer";

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

export default function Category() {
  useEffect(() => {
    document.title = "SideNote | Browse";
  }, []);

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

      <div className="pb-40 lg:ml-8 lg:mr-8">
        <br></br>
        {/* <br id="Anime" className="" /> */}
        {/* <TrailerList title="Anime" data={anime} /> <br /> */}
        <br id="Adventure" className="mt-10" />
        <TrailerList title="Adventure" data={adventure} />
        <br id="Action" className="mt-10" />
        <TrailerList title="Action" data={action} />
        <br id="Crime" className="mt-10" />
        <TrailerList title="Crime" data={crime} />
        <br id="Drama" className="mt-10" />
        <TrailerList title="Drama" data={drama} />
        {/* <br id="Romance" className="mt-10" />
        <TrailerList title="Romance" data={romance} /> */}
        <br id="Science-Fiction" className="mt-10" />
        <TrailerList title="Science-Fiction" data={sciencefiction} />
        <br id="Thriller" className="mt-10" />
        <TrailerList title="Thriller" data={thriller} />
      </div>
      <Footer />
    </>
  );
}
