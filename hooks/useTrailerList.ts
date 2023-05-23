import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useTrailerList = () => {
  const { data, error, isLoading } = useSWR("/api/trailers", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return { data, error, isLoading };
};

export default useTrailerList;
