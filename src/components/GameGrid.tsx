import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "@/hooks/useGame";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "@/hooks/useGenre";
import { GameQuery } from "@/App";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({gameQuery} : GameGridProps) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} gap={10} padding={5} overflow='hidden'>
        {isLoading && skeletons.map((skeleton )=> 
          <GameCardContainer key={skeleton}><SkeletonCard key={skeleton}/></GameCardContainer>
        )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
