import { FetchResponse } from "../services/api-client";
import useMovieQueryStore from "../store";
import APICLient from "../services/api-client";
import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

const apiClient = new APICLient<Movie>("/discover/movie");

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MoviesResponse {
  results: Movie[];
}

const useMovies = () => {
  const movieQuery = useMovieQueryStore((s) => s.movieQuery);

  return useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", movieQuery],
    queryFn: () =>
      apiClient.getAll({
        params: movieQuery,
      }),
    staleTime: 15 * 1000,
    placeholderData: keepPreviousData,
  });
};

export default useMovies;
