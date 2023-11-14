import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'
import MovieGrid from './components/MovieGrid'
import GenreSelection from './components/GenreSelection'
import NavBar from './components/NavBar'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "filters" "main"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='filters' bg='darkblue'>Filters</GridItem>
      <GridItem area='main'>
        <GenreSelection />
        <MovieGrid />
      </GridItem>
    </Grid>
  )
}

export default App
