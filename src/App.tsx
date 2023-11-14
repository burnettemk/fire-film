import { Grid, GridItem } from '@chakra-ui/react'
import GenreSelection from './components/GenreSelection'
import MovieGrid from './components/MovieGrid'
import NavBar from './components/NavBar'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "filters" "main" "footer"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='filters' bg='darkblue'>Filters</GridItem>
      <GridItem area='main'>
        <GenreSelection />
        <MovieGrid />
      </GridItem>
      <GridItem area='footer' bg='black'>
        Footer
      </GridItem>
    </Grid>
  )
}

export default App
