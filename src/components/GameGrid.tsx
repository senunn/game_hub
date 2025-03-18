import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <Text>{error}</Text>
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spaceX={10} spaceY={6}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
