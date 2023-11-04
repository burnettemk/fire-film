import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieList = () => {
  const {movies, error, isLoading} = useMovies();

  return (
    <ul>
      <MovieCard movie={movies[0]}/>
      {isLoading ? movies.map(movie => <li key={movie.id}>{movie.title}</li>) : <p>Loading...</p>}
    </ul>
  )
}

export default MovieList