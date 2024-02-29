import { Box } from "@chakra-ui/react";
import { useIsMoviesSelectedStore, useSearchQueryStore } from "../store";
import ActionButton from "./ActionButton";
import MovieGrid from "./MovieGrid";
import MovieSortOrderSelector from "./MovieSortOrderSelector";
import SearchResultGrid from "./SearchResultGrid";
import TVGrid from "./TVGrid";
import TVSortOrderSelector from "./TVSortOrderSelector";
import TVSearchResultGrid from "./TVSearchResultGrid";

const GridContainer = () => {
  // const [sortOrder, setSortOrder] = useState("Popularity");
  const isMoviesSelected = useIsMoviesSelectedStore((s) => s.isSelected);
  const searchQuery = useSearchQueryStore((s) => s.searchQuery.query);

  if (searchQuery)
    return isMoviesSelected ? <SearchResultGrid /> : <TVSearchResultGrid />;

  return (
    <>
      {isMoviesSelected ? <MovieSortOrderSelector /> : <TVSortOrderSelector />}
      <Box bg="blackAlpha.300">
        {isMoviesSelected ? <MovieGrid /> : <TVGrid />}
      </Box>
    </>
  );
};

export default GridContainer;
