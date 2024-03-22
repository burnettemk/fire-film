import { useInfiniteQuery } from "@tanstack/react-query";
import Series from "../entities/Series";
import APICLient from "../services/api-client";
import { useSearchQueryStore } from "../store";

const apiClient = new APICLient<Series>("/search/tv");

const useSearchTV = () => {
  const searchQuery = useSearchQueryStore((s) => s.searchQuery);

  return useInfiniteQuery({
    queryKey: ["search", searchQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          ...searchQuery,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages && allPages.length < 500
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useSearchTV;
