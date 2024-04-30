import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { axiosInstance } from "../services/api-client";
import genres from "../data/genres";
import Genre from "../entities/Genre";

interface GenreResults {
  genres: Genre[];
}

const fetchGenres = () => {
  return axiosInstance
    .get<GenreResults>("/genre/movie/list")
    .then((res) => res.data);
};

const useGenres = () =>
  useQuery<GenreResults, Error>({
    queryKey: ["genresM"],
    queryFn: fetchGenres,
    staleTime: ms("24h"),
    initialData: { genres: genres.genres },
  });

export default useGenres;
