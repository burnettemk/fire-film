import { useInfiniteQuery } from "@tanstack/react-query";
import Series from "../entities/Series";
import APICLient, { FetchResponse } from "../services/api-client";
import { useTVQueryStore } from "../store";

const apiClient = new APICLient<Series>("/discover/tv");

const useMovies = () => {
  const tvQuery = useTVQueryStore((s) => s.tvQuery);

  return useInfiniteQuery<FetchResponse<Series>, Error>({
    queryKey: ["tv", tvQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: { ...tvQuery, page: pageParam },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length < lastPage.total_pages && allPages.length < 500
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
