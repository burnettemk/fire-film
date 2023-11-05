import React from 'react'
import { Movie } from '../hooks/useMovies'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import CriticScore from './CriticScore'

interface Props {
    movie: Movie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={'https://image.tmdb.org/t/p/original' + movie.poster_path}/>
        <CardBody marginBottom={10}>
          <Heading fontSize='2xl'>{movie.title}</Heading>
          <CriticScore score={movie.vote_average} />
        </CardBody>
    </Card>
  )
}

export default MovieCard