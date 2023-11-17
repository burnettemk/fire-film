import { Grid, GridItem } from '@chakra-ui/react'
import GenreSelection from './components/filters/GenreSelection'
import MovieGrid from './components/MovieGrid'
import NavBar from './components/NavBar'
import Filters from './components/Filters'
import TMDBLogo from './components/TMDBLogo'
import PageSelector from './components/PageSelector'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "filters" "main" "footer"`
    }}>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <GridItem area='filters'>
        <Filters />
      </GridItem>
      <GridItem area='main'>
        <MovieGrid />
      </GridItem>
      <GridItem area='footer' bg='black'>
        <TMDBLogo />
      </GridItem>
    </Grid>
  )
}

export default App
