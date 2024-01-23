import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import useGenres from "../../hooks/useGenres";
import genres from "../../data/genres";
import useMovieQueryStore from "../../store";
import useGenre from "../../hooks/useGenre";

const GenreSelection = () => {
  const setGenreIDs = useMovieQueryStore((s) => s.setGenres);
  const selectedGenreID = useMovieQueryStore((s) => s.movieQuery.with_genres);
  // Fix to make parse all ids from string
  const selectedGenre = useGenre(parseInt(selectedGenreID!));

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        {selectedGenreID ? selectedGenre?.name : "Genre"}
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          type="checkbox"
          onChange={(ids) => setGenreIDs(ids.toString())}
        >
          {genres?.genres.map((genre) => (
            <MenuItemOption key={genre?.id} value={genre?.id.toString()}>
              {genre?.name}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default GenreSelection;
