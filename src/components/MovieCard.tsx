import React from 'react'
import { Movie } from '../hooks/useMovies'
import { Card, Image } from '@chakra-ui/react'

interface Props {
    movie: Movie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
        <Image src={'https://image.tmdb.org/t/p/original' + movie.poster_path} width={150}/>
    </Card>
  )
}

export default MovieCard