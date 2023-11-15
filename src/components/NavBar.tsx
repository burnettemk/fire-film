import { Box, Flex } from '@chakra-ui/react'
import MovieTVToggle from './MovieTVToggle'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <>
      <Flex padding={2} mx={3}>
        <Box 
            w='40px' 
            h='40px' 
            bgGradient='linear(to-br, #FF4500, #ff0000, #fa4d0a)'
            borderRadius='full'
            paddingX={3} 
            paddingY={2}
            mx={2}
            color='black'
            boxShadow='xl'
            // fontWeight='bold'
            // fontSize='sm'
        >
            FF
        </Box>
        <Box flexGrow={1}>
          <SearchInput />
        </Box>
        <Box mx={2}>
          <MovieTVToggle />
        </Box>
      </Flex>
    </>
  )
}

export default NavBar