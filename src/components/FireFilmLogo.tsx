import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSearchQueryStore } from "../store";

const FireFilmLogo = () => {
  const setSearchQuery = useSearchQueryStore((s) => s.setQuery);

  return (
    <Link to={"/"}>
      <Box
        w="fit-content"
        h="fit-content"
        bgGradient="linear(to-br, #FF4500, #ff0000, #fa4d0a)"
        borderRadius="full"
        px={3}
        py={2}
        mr={2}
        color="black"
        id="fire-film"
        onClick={() => setSearchQuery("")}
        userSelect="none"
      >
        FF
      </Box>
    </Link>
  );
};

export default FireFilmLogo;
