import useMovies from "../hooks/useMovies";
import ContentGridDisplay from "./ContentGridDisplay";

const MovieGrid = () => {
  const responseData = useMovies();

  return <ContentGridDisplay response={responseData} />;
};

export default MovieGrid;
