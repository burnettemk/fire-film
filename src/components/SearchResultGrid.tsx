import useSearchMovie from "../hooks/useSearchMovie";
import MovieGridDisplay from "./MovieGridDisplay";

const SearchResultGrid = () => {
  const responseData = useSearchMovie();

  return <MovieGridDisplay response={responseData} />;
};

export default SearchResultGrid;
