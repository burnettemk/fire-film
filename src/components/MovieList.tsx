import { SimpleGrid } from '@chakra-ui/react';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';

const MovieList = () => {
  const {movies, error, isLoading} = useMovies();

  return (
    <>
      <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 6}} spacing={10} padding={19} /*mx='auto' maxW='85%'*/>
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </SimpleGrid>
    </>
  )
}

export default MovieList