import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import TrailerList from "@/components/TrailerList";
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";
import { useEffect } from "react";
import useSearch from "@/hooks/useSearch";
import { useRouter } from "next/router";
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

export default function Search() {
  useEffect(() => {
    document.title = "SideNote | Search";
  }, []);

  const { isOpen, closeModal } = useInfoModal();
  const router = useRouter();
  const { query } = router.query;
  const { data: results = [] } = useSearch(query as string);

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />

      <div className="pb-40 lg:ml-8 lg:mr-8">
        <br id="Adventure" className="mt-10" />
        <br></br>
        <TrailerList
          title={
            results?.length
              ? `Search results for '` + query + "'"
              : `No results found for for '` + query + "'"
          }
          data={results}
        />
      </div>
      <Footer />
    </>
  );
}
