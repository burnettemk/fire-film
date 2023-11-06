import { SimpleGrid } from '@chakra-ui/react';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieList = () => {
  const {movies, error, isLoading} = useMovies();

  return (
    <>
      <SimpleGrid columns={{sm: 1, md: 2, lg:3, xl: 4}} spacing={10} padding={20}>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </SimpleGrid>
    </>
  )
}

export default MovieList