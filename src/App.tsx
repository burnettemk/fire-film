import { Button, ButtonGroup, Grid, GridItem } from '@chakra-ui/react'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "filters" "main"`
    }}>
      <GridItem area='nav' bg='skyblue'>Nav</GridItem>
      <GridItem area='filters' bg='cyan'>Filters</GridItem>
      <GridItem area='main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  )
}

export default App
