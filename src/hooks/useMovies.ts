import { useInfiniteQuery } from "@tanstack/react-query";
import Movie from "../entities/Movie";
import APICLient, { FetchResponse } from "../services/api-client";
import { useMovieQueryStore } from "../store";

const apiClient = new APICLient<Movie>("/discover/movie");

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  return useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: { ...movieQuery, page: pageParam },
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
