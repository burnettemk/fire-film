import useGenre from "../hooks/useGenre";
import useGenres from "../hooks/useGenres";
import SelectionList from "../modules/SelectionList/SelectionList";
import { useMovieQueryStore } from "../store";
import DrawerDisplay from "./DrawerDisplay";

const GenreList = () => {
  // return <SelectionList labels={}></SelectionList>
};

const GenreSelection = () => {
  const { data: genres, isLoading, error } = useGenres();
  const setGenreIDs = useMovieQueryStore((s) => s.setGenres);
  const selectedGenreID = useMovieQueryStore((s) => s.movieQuery.with_genres);
  // Fix to make parse all ids from string
  const selectedGenre = useGenre(parseInt(selectedGenreID!));

  const genreList = genres.genres.map((genre) => genre.name);
  const idList = genres.genres.map((g) => g.id);

  return (
    <DrawerDisplay
      heading="Select Genres"
      onReset={setGenreIDs}
      children={
        <SelectionList
          labels={genreList}
          labelIds={idList}
          onChange={setGenreIDs}
          selectionType="and"
          needsID={true}
        ></SelectionList>
      }
      buttonHeading="Genre"
    />
  );
};

export default GenreSelection;
