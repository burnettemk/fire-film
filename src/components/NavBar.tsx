import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import MovieTVToggle from "./MovieTVToggle";
import SearchInput from "./SearchInput";
import FireFilmLogo from "./FireFilmLogo";
import { RiSurveyLine } from "react-icons/ri";
import SurveyLink from "./SurveyLink";

const NavBar = () => {
  return (
    <Box bg="blackAlpha.300">
      <Flex p={2} mx={3} pt={3}>
        <SurveyLink />
        <FireFilmLogo />
        <SearchInput />
        <MovieTVToggle />
      </Flex>
    </Box>
  );
};

export default NavBar;
