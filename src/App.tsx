import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show when={isLargeScreen} fallback={null}>
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
