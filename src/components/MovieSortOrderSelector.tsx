import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useMovieQueryStore } from "../store";

const MovieSortOrderSelector = () => {
  const [order, setOrder] = useState("Popularity");
  const setSortOrder = useMovieQueryStore((s) => s.setSortOrder);

  return (
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
  );
};

export default MovieSortOrderSelector;
