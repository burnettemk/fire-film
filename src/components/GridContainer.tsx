import { Box } from "@chakra-ui/react";
import { useIsMoviesSelectedStore, useSearchQueryStore } from "../store";
import MovieGrid from "./movie components/MovieGrid";
import MovieSortOrderSelector from "./movie components/MovieSortOrderSelector";
import SearchResultGrid from "./movie components/SearchResultGrid";
import TVGrid from "./tv components/TVGrid";
import TVSearchResultGrid from "./tv components/TVSearchResultGrid";
import TVSortOrderSelector from "./tv components/TVSortOrderSelector";
import { backgroundStyles } from "../theme";

const GridContainer = () => {
  // const [sortOrder, setSortOrder] = useState("Popularity");
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  const searchQuery = useSearchQueryStore((s) => s.searchQuery.query);

  if (searchQuery)
    return (
      <Box bg={backgroundStyles[2]}>
        {isMoviesSelected ? <SearchResultGrid /> : <TVSearchResultGrid />}
      </Box>
    );

  return (
    <>
      <Box bg={backgroundStyles[2]} pt={3}>
        {isMoviesSelected ? (
          <MovieSortOrderSelector />
        ) : (
          <TVSortOrderSelector />
        )}
      </Box>
      <Box bg={backgroundStyles[2]}>
        {isMoviesSelected ? <MovieGrid /> : <TVGrid />}
      </Box>
    </>
  );
};

export default GridContainer;
