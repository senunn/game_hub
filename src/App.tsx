import { Grid, GridItem, HStack, Show, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlaformListButton from "./components/PlaformList";
import { Platform } from "./hooks/useGame";
import SortList from "./components/SortList";

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

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
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => {setGameQuery({...gameQuery,genre})}}/>
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack paddingLeft={5} marginBottom={3}>
          <PlaformListButton onSelect={(platform) => setGameQuery({...gameQuery,platform})} selectedPlatform={gameQuery.platform}/>
          <SortList/>
        </HStack>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
