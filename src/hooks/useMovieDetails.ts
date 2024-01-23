import { useEffect, useState } from "react";
import { headers } from "../services/config";
import { axiosInstance } from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface MovieDetailsResponse {
  id: number;
  genres: Genre[];
}

const useMovieDetails = (movieId: number) => {
  const controller = new AbortController();

  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosInstance
      .get<MovieDetailsResponse>(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        {
          headers,
          params: {
            langauge: "en-US",
          },
          signal: controller.signal,
        }
      )
      .then((res) => setGenres(res.data.genres))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useMovieDetails;
