import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGame";
import GameCard from "./GameCard";
import SkeletonCard from "./SkeletonCard";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} gap={10} padding={5} overflow='hidden'>
        {isLoading && skeletons.map((skeleton )=> 
          <GameCardContainer><SkeletonCard key={skeleton}/></GameCardContainer>
        )}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
