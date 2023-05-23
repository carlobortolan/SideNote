import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import TrailerList from "@/components/TrailerList";
import useLatest from "@/hooks/useLatest";
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

export default function Latest() {
  const { data: trailers = [] } = useLatest();
  const { isOpen, closeModal } = useInfoModal();
  useEffect(() => {
    document.title = "SideNote | Latest";
  }, []);
  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      <div className="pb-40 ml-8">
        <br></br>
        <br></br>
        <br></br>
        <TrailerList title="Latest trailers" data={trailers} />
      </div>
    </>
  );
}
