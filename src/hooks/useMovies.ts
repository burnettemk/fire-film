import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { headers } from "../services/config";
import apiClient from "../services/api-client";
import useMovieQueryStore from "../store";

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

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<MoviesResponse>("/discover/movie", {
        headers,
        params: movieQuery,
        signal: controller.signal,
      })
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { movies, error, isLoading };
};

export default useMovies;
