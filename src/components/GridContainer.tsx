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

const GridContainer = () => {
  const [order, setOrder] = useState("Popularity");
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);

  return (
    <>
      <Box width="fit-content" mx="auto" my="10px">
        <Menu>
          <MenuButton as={Button} rightIcon={<IoChevronDown />}>
            {order}
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                setSortOrder("release_date.desc");
                setOrder("Recent");
              }}
            >
              Now Playing
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSortOrder("popularity.desc");
                setOrder("Popularity");
              }}
            >
              Popular
            </MenuItem>
            <MenuItem
              onClick={() => {
                setSortOrder("vote_average.desc");
                setOrder("Vote Avg.");
              }}
            >
              Top Rated
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box bg="blackAlpha.300">
        {isMoviesSelected ? <MovieGrid /> : <TVGrid />}
      </Box>
    </>
  );
};

export default GridContainer;
