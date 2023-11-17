import { useState } from 'react'
import { HStack, Icon, Text, VStack } from '@chakra-ui/react'
import { PiArrowBendDownRightBold, PiArrowBendUpLeftBold } from 'react-icons/pi'

const MovieTVToggle = () => {
  const [isMoviesSelected, setIsMoviesSelected] = useState(true);

  return (
    <>
        <VStack color='gray.600'
            onClick={() => {setIsMoviesSelected(!isMoviesSelected); console.log(isMoviesSelected)}}>
            <HStack>
                <Text 
                  color={isMoviesSelected ? 'gray.400' : ''} 
                  transition="color 0.25s ease-out"
                  userSelect='none'
                >
                  Movies
                </Text>
                <Icon as={PiArrowBendUpLeftBold}/>
            </HStack>
            <HStack marginLeft={7} marginTop={-3}>
                <Icon as={PiArrowBendDownRightBold}/>
                <Text 
                  color={isMoviesSelected ? '' : 'gray.400'} 
                  transition="color 0.25s ease-out"
                  userSelect='none'
                  paddingLeft={3}
                >
                  TV
                </Text>
            </HStack>
        </VStack>
    </>
  )
}

export default MovieTVToggle