import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import { useGame } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardConatiner } from "./GameCardConatiner";
import { GameCardSkeleton } from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";
interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,

    fetchNextPage,
    hasNextPage,
  } = useGame(gameQuery);
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return <Text>{error.message}</Text>;
  const dataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={<Spinner />}
        dataLength={dataLength}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardConatiner key={skeleton}>
                <GameCardSkeleton />
              </GameCardConatiner>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardConatiner key={game.id}>
                  <GameCard game={game} />
                </GameCardConatiner>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};
