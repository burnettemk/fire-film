import { Grid, GridItem } from "@chakra-ui/react";
import { TiArrowUpThick } from "react-icons/ti";
import setPrefs from "./UserPrefsSetup";
import Filters from "./components/Filters";
import GridContainer from "./components/GridContainer";
import NavBar from "./components/NavBar";
import TMDBLogo from "./components/TMDBLogo";
import ActionButton from "./modules/ActionButton/ActionButton";

function App() {
  // Calling setUserPrefs function when this component is mounted (at startup)
  //  this component will never be unmounted so for now this works
  setPrefs();

  return (
    <>
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
      <ActionButton
        size="md"
        variant="solid"
        positioning={{ right: "12px", bottom: "65px", left: "", top: "" }}
        children={<TiArrowUpThick /*size={"10px"}*/ />}
        scrollToID="nav-bar"
      />
    </>
  );
}

export default App;
