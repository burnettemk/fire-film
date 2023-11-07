import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Movie } from '../hooks/useMovies'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import apiConfig from '../services/apiConfig'

interface Props {
    movie: Movie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={getCroppedImageUrl(apiConfig.images.base_url + movie.poster_path)}/>
        <CardBody marginBottom={10}>
          <Heading fontSize='2xl'>{movie.title}</Heading>
          <CriticScore score={movie.vote_average} />
        </CardBody>
    </Card>
  )
}

export default MovieCard