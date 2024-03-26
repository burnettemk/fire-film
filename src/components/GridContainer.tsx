import { Box } from "@chakra-ui/react";
import { useIsMoviesSelectedStore, useSearchQueryStore } from "../store";
import ActionButton from "./ActionButton";
import MovieGrid from "./movie components/MovieGrid";
import MovieSortOrderSelector from "./movie components/MovieSortOrderSelector";
import SearchResultGrid from "./movie components/SearchResultGrid";
import TVGrid from "./tv components/TVGrid";
import TVSearchResultGrid from "./tv components/TVSearchResultGrid";
import TVSortOrderSelector from "./tv components/TVSortOrderSelector";
import { TiArrowUpThick } from "react-icons/ti";

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
        <ActionButton size="md" variant="solid" right={"12px"} bottom={"65px"}>
          <TiArrowUpThick /*size={"10px"}*/ />
        </ActionButton>
        {isMoviesSelected ? <MovieGrid /> : <TVGrid />}
      </Box>
    </>
  );
};

export default GridContainer;
