import { Box, VStack } from "@chakra-ui/react";
import { useIsMoviesSelectedStore } from "../store";
import GenreSelection from "./GenreSelection";
import RatingSelection from "./RatingSelection";
import TVGenreSelection from "./tv components/TVGenreSelection";

const Filters = () => {
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  return (
    <>
      <Box width="fit-content" mx="auto" my={3}>
        <VStack>
          {isMoviesSelected ? <GenreSelection /> : <TVGenreSelection />}
          {isMoviesSelected ? <RatingSelection /> : null}
        </VStack>
      </Box>
    </>
  );
};

export default Filters;
