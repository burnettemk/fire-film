import { Box, SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import PageSelector from "./PageSelector";

const MovieGrid = () => {
  const { movies, error, isLoading } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Box bg="blackAlpha.300">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 6 }}
        spacing={{ base: "3.5em", lg: "2.5em", "2xl": "1.5em" }}
        padding={{ base: "4em" }}
        mx="auto"
        w="89%"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>
      <PageSelector />
    </Box>
  );
};

export default MovieGrid;
