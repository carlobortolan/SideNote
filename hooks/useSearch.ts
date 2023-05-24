import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useSearch = (query?: string) => {
  const { data, error, isLoading } = useSwr(
    query ? `/api/search/?query=${query}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading };
};

export default useSearch;
