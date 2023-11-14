import { Image } from '@chakra-ui/react'
import tmdbLogo from '../assets/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'

const TMDBLogo = () => {
  return (
    <Image 
        boxSize={20} 
        height='fit-content' 
        paddingY={5} 
        src={tmdbLogo}
        mx={2}
    />
  )
}

export default TMDBLogo