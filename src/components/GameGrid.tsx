import { SimpleGrid, Text } from "@chakra-ui/react";

import { GameQuery } from "../App";
import { useGame } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardConatiner } from "./GameCardConatiner";
import { GameCardSkeleton } from "./GameCardSkeleton";
interface Props {
  gameQuery: GameQuery | null;
}
export const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGame(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardConatiner key={skeleton}>
            <GameCardSkeleton />
          </GameCardConatiner>
        ))}
      {games?.results.map((game) => (
        <GameCardConatiner key={game.id}>
          <GameCard game={game} />
        </GameCardConatiner>
      ))}
    </SimpleGrid>
  );
};
