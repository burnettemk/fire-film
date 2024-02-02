import React, { useState } from "react";
import MovieGrid from "./MovieGrid";
import {
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import ListGrid from "./ListGrid";
import PageSelector from "./PageSelector";
import useMovieQueryStore from "../store";

const listTypes = ["movies", "now_playing", "upcoming", "popular", "top_rated"];
const listNames = [
  "Discover",
  "Now Playing",
  "Upcoming",
  "Popular",
  "Top Rated",
];

const replaceName = (name: string) => {
  switch (name) {
    case listTypes[0]:
      return listNames[0];
    case listTypes[1]:
      return listNames[1];
    case listTypes[2]:
      return listNames[2];
    case listTypes[3]:
      return listNames[3];
    case listTypes[4]:
      return listNames[4];
    default:
      return listNames[0];
  }
};

const GridContainer = () => {
  const [order, setOrder] = useState("Popularity");
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);

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
        <MovieGrid />
      </Box>
    </>
  );
};

export default GridContainer;
