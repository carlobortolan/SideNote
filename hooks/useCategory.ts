import useSwr from "swr";
import fetcher from "@/lib/fetcher";

const useCategory = (category?: string) => {
  const { data, error, isLoading } = useSwr(
    category ? `/api/movies/category/${category}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  return { data, error, isLoading };
};

export default useCategory;
