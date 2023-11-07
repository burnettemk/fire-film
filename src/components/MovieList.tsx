import { SimpleGrid } from '@chakra-ui/react';
import useMovies from '../hooks/useMovies';
import MovieCard from './MovieCard';
import MovieCardSkeleton from './MovieCardSkeleton';

const MovieList = () => {
  const {movies, error, isLoading} = useMovies();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <SimpleGrid 
        columns={{sm: 1, md: 2, lg: 4, xl: 6}}
        spacing={10} 
        padding={19} 
        /*mx='auto' maxW='85%'*/
        >
        {isLoading && skeletons.map(skeleton => <MovieCardSkeleton key={skeleton} />)}
        {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
      </SimpleGrid>
    </>
  )
}

export default MovieList