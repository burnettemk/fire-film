import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Filters from "./components/Filters";
import TMDBLogo from "./components/TMDBLogo";
import GridContainer from "./components/GridContainer";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "filters" "main" "footer"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="filters">
        <Filters />
      </GridItem>
      <GridItem area="main">
        <GridContainer />
      </GridItem>
      <GridItem area="footer" bg="black">
        <TMDBLogo />
      </GridItem>
    </Grid>
  );
}

export default App;
