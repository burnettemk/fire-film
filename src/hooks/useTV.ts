import { FetchResponse } from "../services/api-client";
import { useTVQueryStore } from "../store";
import APICLient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APICLient<Series>("/discover/tv");

export interface Series {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
}

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
      return allPages.length <= lastPage.total_pages || allPages.length <= 500
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
