import { Box, SimpleGrid } from "@chakra-ui/react";
import { useIsMoviesSelectedStore } from "../store";
import GenreSelection from "./GenreSelection";
import RatingSelection from "./RatingSelection";
import RuntimeSelection from "./RuntimeSelection";
import TVGenreSelection from "./tv components/TVGenreSelection";

const Filters = () => {
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  return (
    <>
      <Box width="50%" mx="auto" my={3} id="filters" py={2}>
        <SimpleGrid minChildWidth="80px" spacing="25px">
          {isMoviesSelected ? <GenreSelection /> : <TVGenreSelection />}
          {isMoviesSelected ? <RatingSelection /> : null}
          {isMoviesSelected ? <RuntimeSelection /> : null}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Filters;
