import { Box, SimpleGrid } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import PageSelector from "./PageSelector";
import React from "react";

const MovieGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
  } = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <Box bg="blackAlpha.300">
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        spacing={{ base: "3.5em", lg: "2.5em", "2xl": "2.9em" }}
        padding={{ base: "4em" }}
        mx="auto"
        w="89%"
      >
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </React.Fragment>
        ))}
        <div>
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? "Loading more..."
              : hasNextPage
              ? "Load More"
              : "Nothing more to load"}
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </SimpleGrid>
    </Box>
  );
};

export default MovieGrid;
