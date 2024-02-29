import { Box, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useSearchQueryStore } from "../store";

const FireFilmLogo = () => {
  const setSearchQuery = useSearchQueryStore((s) => s.setQuery);

  return (
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
      id="fire-film"
      onClick={() => setSearchQuery("")}
      userSelect="none"
    >
      FF
    </Box>
  );

  return (
    <Link
      href="https://forms.gle/H5D929vUJfxsBcTw5"
      isExternal
      onClick={() => setSearchQuery("")}
    >
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
          id="fire-film"
        >
          FF
        </Box>
      </Tooltip>
    </Link>
  );
};

export default FireFilmLogo;
