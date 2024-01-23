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
  const [list, setList] = useState(listTypes[0]);

  return (
    <>
      <Box width="fit-content" mx="auto" my="10px">
        <Menu>
          <MenuButton as={Button} rightIcon={<IoChevronDown />}>
            {replaceName(list)}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => setList(listTypes[0])}>Movies</MenuItem>
            <MenuItem onClick={() => setList(listTypes[1])}>
              Now Playing
            </MenuItem>
            <MenuItem onClick={() => setList(listTypes[2])}>Upcoming</MenuItem>
            <MenuItem onClick={() => setList(listTypes[3])}>Popular</MenuItem>
            <MenuItem onClick={() => setList(listTypes[4])}>Top Rated</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      {list === "movies" ? <MovieGrid /> : <ListGrid list={list} />}
    </>
  );
};

export default GridContainer;
