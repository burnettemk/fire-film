import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "filters" "main"`
    }}>
      <GridItem area='nav' bg='midnightblue'>Nav</GridItem>
      <GridItem area='filters' bg='darkblue'>Filters</GridItem>
      <GridItem area='main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  )
}

export default App
