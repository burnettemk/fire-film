import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import MovieTVToggle from "./MovieTVToggle";
import SearchInput from "./SearchInput";
import FireFilmLogo from "./FireFilmLogo";

const NavBar = () => {
  return (
    <Box bg="blackAlpha.300">
      <Flex padding={2} mx={3}>
        <FireFilmLogo />
        <Box flexGrow={1}>
          <SearchInput />
        </Box>
        <Box mx={2}>
          <MovieTVToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
