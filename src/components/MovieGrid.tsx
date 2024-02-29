import useMovies from "../hooks/useMovies";
import MovieGridDisplay from "./MovieGridDisplay";

const MovieGrid = () => {
  const responseData = useMovies();

  return <MovieGridDisplay response={responseData} />;
};

export default MovieGrid;
