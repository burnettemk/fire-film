import genres from "../data/genres";
import useGenres from "./useGenres";

const useGenre = (id?: number) => {
  // const { data: genres } = useGenres();
  return genres?.genres.find((g) => g.id === id);
};

export const findGenreByName = (name?: string) => {
  return genres?.genres.find((g) => g.name === name);
};

export default useGenre;
