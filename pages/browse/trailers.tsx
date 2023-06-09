import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import TrailerList from "@/components/TrailerList";
import useTrailerList from "@/hooks/useTrailerList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
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

export default function Trailers() {
  const { data: trailers = [] } = useTrailerList();
  const { isOpen, closeModal } = useInfoModal();
  useEffect(() => {
    document.title = "SideNote | Trailers";
  }, []);
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pb-40 lg:ml-8 lg:mr-8">
        <br id="Trailers" className="mt-10" />
        <br></br>
        <TrailerList title="All trailers" data={trailers} />
      </div>
      <Footer />
    </>
  );
}
