import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useTrailer = (id?: string) => {
  const { data, error, isLoading } = useSwr(
    id ? `/api/trailers/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading };
};

export default useTrailer;
