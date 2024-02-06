import React from "react";
import { useTVQueryStore } from "../store";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import useGenresTV from "../hooks/useGenresTV";

const TVGenreSelection = () => {
  const { data: genres, isLoading, error } = useGenresTV();
  const setGenreIDs = useTVQueryStore((s) => s.setGenres);
  const selectedGenreID = useTVQueryStore((s) => s.tvQuery.with_genres);
  // Fix to make parse all ids from string
  // const selectedGenre = useGenre(parseInt(selectedGenreID!));

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Genre
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

export default TVGenreSelection;
