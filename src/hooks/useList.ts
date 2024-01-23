import { Movie } from "./useMovies";
import APICLient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const params = {
  language: "en-US",
  page: 1,
};

const useList = (list?: string) => {
  const apiClient = new APICLient<Movie>(`/movie/${list}`);

  return useQuery<FetchResponse<Movie>>({
    queryKey: [list],
    queryFn: apiClient.getAll,
    staleTime: 30 * 1000,
  });
};

export default useList;
