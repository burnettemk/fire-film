import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { axiosInstance } from "../services/api-client";
import genresTV from "../data/genresTV";
import { Genre } from "./useGenres";

interface GenreResults {
  genres: Genre[];
}

const params = {
  language: "en",
};

const fetchGenres = () => {
  return axiosInstance
    .get<GenreResults>("/genre/tv/list")
    .then((res) => res.data);
};

const useGenresTV = () =>
  useQuery<GenreResults, Error>({
    queryKey: ["genresTV"],
    queryFn: fetchGenres,
    staleTime: ms("24h"),
    initialData: { genres: genresTV.genres },
  });

export default useGenresTV;
