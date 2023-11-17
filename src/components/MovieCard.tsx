import { Box, Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Movie } from '../hooks/useMovies'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import apiConfig from '../services/apiConfig'

interface Props {
    movie: Movie
}
const MovieCard = ({ movie }: Props) => {
  return (
    <Card overflow='hidden' bg='transparent'>
        <Image borderRadius={10} src={getCroppedImageUrl(apiConfig.images.base_url + movie.poster_path)}/>
        <CardBody>
          <Box marginTop={-10} paddingBottom={2}>
            <CriticScore score={movie.vote_average}/>
          </Box>
          <Heading fontSize={{sm: '4xl', xl: 'xl'}} textAlign='center'>{movie.title}</Heading>
        </CardBody>
    </Card>
  )
}

export default MovieCard