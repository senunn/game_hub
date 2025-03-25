import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  const [slectedGenre, setSelectedGenre] = useState<Genre | null>(null)

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{base: '1fr', lg: '200px 1fr'}}
    >
      <GridItem area="nav">
        <Navbar/>
      </GridItem>
      <Show when={isLargeScreen} fallback={null}>
        <GridItem area="aside" paddingLeft='10px'>
          <GenreList selectedGenre={slectedGenre} onSelectGenre={(genre) => {setSelectedGenre(genre)}}/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <GameGrid selectedGenre={slectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
