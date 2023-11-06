import React from 'react'
import { Movie } from '../hooks/useMovies'
import useMovieDetails from '../hooks/useMovieDetails';

interface Props {
  movie: Movie;
}

const GenreList = ({ movie }: Props) => {
  const {genres, error} = useMovieDetails(movie?.id);

  return (
    <ul>
      {genres.map(genre => <li>{genre.name}</li>)}
    </ul>
  )
}

export default GenreList