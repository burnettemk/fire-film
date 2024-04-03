import { Box } from "@chakra-ui/react";
import { useIsMoviesSelectedStore, useSearchQueryStore } from "../store";
import MovieGrid from "./movie components/MovieGrid";
import MovieSortOrderSelector from "./movie components/MovieSortOrderSelector";
import SearchResultGrid from "./movie components/SearchResultGrid";
import TVGrid from "./tv components/TVGrid";
import TVSearchResultGrid from "./tv components/TVSearchResultGrid";
import TVSortOrderSelector from "./tv components/TVSortOrderSelector";

const GridContainer = () => {
  // const [sortOrder, setSortOrder] = useState("Popularity");
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  const searchQuery = useSearchQueryStore((s) => s.searchQuery.query);

  if (searchQuery)
    return isMoviesSelected ? <SearchResultGrid /> : <TVSearchResultGrid />;

  return (
    <>
      <Box bg="blackAlpha.300" pt={3}>
        {isMoviesSelected ? (
          <MovieSortOrderSelector />
        ) : (
          <TVSortOrderSelector />
        )}
      </Box>
      <Box bg="blackAlpha.300">
        {isMoviesSelected ? <MovieGrid /> : <TVGrid />}
      </Box>
    </>
  );
};

export default GridContainer;
