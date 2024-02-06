import { Box } from "@chakra-ui/react";
import GenreSelection from "./GenreSelection";
import { useIsMoviesSelectedStore } from "../store";
import TVGenreSelection from "./TVGenreSelection";

const Filters = () => {
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  return (
    <>
      <Box width="fit-content" mx="auto" mt="10px">
        {isMoviesSelected ? <GenreSelection /> : <TVGenreSelection />}
      </Box>
    </>
  );
};

export default Filters;
