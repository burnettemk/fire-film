import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useMovieQueryStore, useTVQueryStore } from "../store";
import MovieGrid from "./MovieGrid";
import { useIsMoviesSelectedStore } from "../store";
import TVGrid from "./TVGrid";
import MovieSortOrderSelector from "./MovieSortOrderSelector";
import TVSortOrderSelector from "./TVSortOrderSelector";

const GridContainer = () => {
  // const [sortOrder, setSortOrder] = useState("Popularity");
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);

  return (
    <>
      {isMoviesSelected ? <MovieSortOrderSelector /> : <TVSortOrderSelector />}
      <Box bg="blackAlpha.300">
        {isMoviesSelected ? <MovieGrid /> : <TVGrid />}
      </Box>
    </>
  );
};

export default GridContainer;
