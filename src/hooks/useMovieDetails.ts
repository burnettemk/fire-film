import { useEffect, useState } from "react";
import { headers } from "../components/config";
import apiClient from "../services/api-client";

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