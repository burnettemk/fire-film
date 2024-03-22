import useSearchMovie from "../hooks/useSearchMovie";
import ContentGridDisplay from "./ContentGridDisplay";

const SearchResultGrid = () => {
  const responseData = useSearchMovie();

  return <ContentGridDisplay response={responseData} />;
};

export default SearchResultGrid;
