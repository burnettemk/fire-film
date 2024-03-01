import { Box, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { useSearchQueryStore } from "../store";

const FireFilmLogo = () => {
  const setSearchQuery = useSearchQueryStore((s) => s.setQuery);

  return (
    <Box
      w="fit-content"
      h="fit-content"
      bgGradient="linear(to-br, #FF4500, #ff0000, #fa4d0a)"
      borderRadius="full"
      px={3}
      py={2}
      mr={2}
      ml={1}
      color="black"
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
          h="fit-content"
          bgGradient="linear(to-br, #FF4500, #ff0000, #fa4d0a)"
          borderRadius="full"
          px={3}
          py={2}
          mr={2}
          ml={1}
          color="black"
          id="fire-film"
        >
          FF
        </Box>
      </Tooltip>
    </Link>
  );
};

export default FireFilmLogo;
