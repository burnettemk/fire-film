import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { headers, tmdbMovieDetailConfig } from "../components/config";

interface Genre {
    id: number;
    name: string;
}

interface MovieDetailsResponse {
    id: number;
    genres: Genre[]
}

const useMovieDetails = ( movieId: number) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<MovieDetailsResponse>(`https://api.themoviedb.org/3/movie/${movieId}`,
      {headers,
      params: {
        langauge: 'en-US'
    }})
    .then(res => setGenres(res.data.genres))
    .catch(err => setError(err.message))
  }, [])

  return {genres, error}
}

export default useMovieDetails;