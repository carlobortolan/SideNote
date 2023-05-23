import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import TrailerList from "@/components/TrailerList";
import useCategory from "@/hooks/useCategory";
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
  const { data: japanese = [] } = useCategory("japanese");
  const { data: hollywood = [] } = useCategory("hollywood");
  const { data: classics = [] } = useCategory("classics");
  const { data: action = [] } = useCategory("action");
  const { data: romance = [] } = useCategory("romance");
  const { data: drama = [] } = useCategory("drama");
  const { data: comedy = [] } = useCategory("comedy");
  const { data: sciencefiction = [] } = useCategory("sciencefiction");
  const { isOpen, closeModal } = useInfoModal();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />

      <div className="pb-40 ml-8">
        <br></br>
        <br></br>
        <br></br>
        <TrailerList title="Japanese" data={japanese} /> <br />
        <TrailerList title="Hollywood" data={hollywood} /> <br />
        <TrailerList title="Classics" data={classics} />
        <br />
        <TrailerList title="Action" data={action} />
        <br />
        <TrailerList title="Romance" data={romance} />
        <br />
        <TrailerList title="Drama" data={drama} />
        <br />
        <TrailerList title="Comedy" data={comedy} />
        <br />
        <TrailerList title="Science-Fiction" data={sciencefiction} />
      </div>
    </>
  );
}
