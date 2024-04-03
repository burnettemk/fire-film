import React, { useState } from "react";
import { useTVQueryStore } from "../../store";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const TVSortOrderSelector = () => {
  const [order, setOrder] = useState("Popularity");
  const setSortOrder = useTVQueryStore((s) => s.setSortOrder);

  return (
    <Box width="fit-content" mx="auto">
      <Menu>
        <MenuButton as={Button} rightIcon={<IoChevronDown />}>
          {order}
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => {
              setSortOrder("first_air_date.desc");
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

export default TVSortOrderSelector;
