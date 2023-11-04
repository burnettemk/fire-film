import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { tmdbConfigOptions } from "../components/config";

interface Movie {
    id: number;
    title: string;
}
  
interface MoviesResponse {
    results: Movie[];
}

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    apiClient.request<MoviesResponse>(tmdbConfigOptions)
    .then(res => setMovies(res.data.results))
    .catch(err => setError(err.message))
  }, [])

  return {movies, error, isLoading}
}

export default useMovies;
