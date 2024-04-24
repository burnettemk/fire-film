import { Box, SimpleGrid } from "@chakra-ui/react";
import { useIsMoviesSelectedStore } from "../store";
import GenreSelection from "./GenreSelection";
import RatingSelection from "./RatingSelection";
import RuntimeSelection from "./RuntimeSelection";
import TVGenreSelection from "./tv components/TVGenreSelection";
import YearSelection from "./YearSelection";
import { backgroundStyles } from "../theme";

const Filters = () => {
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  return (
    <Box bg={backgroundStyles.base} h="fit-content">
      <Box width="50%" mx="auto" my={0} id="filters" py={5}>
        <SimpleGrid minChildWidth="80px" spacing="25px">
          {isMoviesSelected ? <GenreSelection /> : <TVGenreSelection />}
          {isMoviesSelected ? <RatingSelection /> : null}
          {isMoviesSelected ? <RuntimeSelection /> : null}
          {isMoviesSelected ? <YearSelection /> : null}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Filters;
