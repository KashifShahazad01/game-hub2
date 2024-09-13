import { SimpleGrid } from "@chakra-ui/react";

import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardConatiner } from "./GameCardConatiner";
import { useGame } from "../hooks/useGames";

export const GameGrid = () => {
  const { data: games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        padding={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatiner>
              <GameCardSkeleton key={skeleton} />
            </GameCardConatiner>
          ))}
        {games.map((game) => (
          <GameCardConatiner>
            <GameCard key={game.id} game={game} />
          </GameCardConatiner>
        ))}
      </SimpleGrid>
    </>
  );
};
