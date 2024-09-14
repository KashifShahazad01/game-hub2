import { SimpleGrid } from "@chakra-ui/react";

import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardConatiner } from "./GameCardConatiner";
import { Platform, useGame } from "../hooks/useGames";
import { Genre } from "../hooks/useGenre";
interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}
export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGame(selectedGenre, selectedPlatform);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardConatiner key={skeleton}>
              <GameCardSkeleton />
            </GameCardConatiner>
          ))}
        {games.map((game) => (
          <GameCardConatiner key={game.id}>
            <GameCard game={game} />
          </GameCardConatiner>
        ))}
      </SimpleGrid>
    </>
  );
};
