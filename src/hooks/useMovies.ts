import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { headers } from "../components/config";
import apiClient from "../services/api-client";

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
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient.get<MoviesResponse>('https://api.themoviedb.org/3/discover/movie'
    , { headers,
        params: {
          include_adult: false,
          include_video: false,
          language: 'en-US',
          page: 1,
          sort_by: 'popularity.desc'
        },
        signal: controller.signal})
    .then(res => {
      setMovies(res.data.results);
      setIsLoading(false);
    })
    .catch(err => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setIsLoading(false);
    })

    return () => controller.abort();
  }, [])

  return {movies, error, isLoading}
}

export default useMovies;
