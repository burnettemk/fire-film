import { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store";
import APICLient from "../services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiClient = new APICLient<Movie>("/discover/movie");

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: { ...movieQuery, page: pageParam },
      }),
    // staleTime: 15 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length <= lastPage.total_pages
        ? allPages.length + 1
        : undefined;
    },
  });
};

export default useMovies;
