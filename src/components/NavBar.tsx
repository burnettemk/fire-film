import { Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import MovieTVToggle from "./MovieTVToggle";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <Box bg="blackAlpha.300">
      <Flex padding={2} mx={3}>
        <Link href="https://forms.gle/H5D929vUJfxsBcTw5" isExternal>
          <Tooltip label="Take Survey" aria-label="A tooltip">
            <Box
              w="fit-content"
              h="40px"
              bgGradient="linear(to-br, #FF4500, #ff0000, #fa4d0a)"
              borderRadius="full"
              paddingX={3}
              paddingY={2}
              mx={2}
              color="black"
              boxShadow="xl"
              // fontWeight='bold'
              // fontSize='sm'
            >
              FF
            </Box>
          </Tooltip>
        </Link>
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
