import useMovies, { Movie } from "./useMovies";
import useData from "./useData";

const params = {
  language: "en-US",
  page: 1,
};

const useList = (list?: string) => useData<Movie>(`/movie/${list}`);

export default useList;
