import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, SimpleGrid, GridItem } from "@chakra-ui/react";
import { ExtendableText } from "../components/ExtendableText";

import GameAttributes from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";
import GameScreenShots from "../components/GameScreenShots";

export const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) <Spinner />;
  if (error || !game) <p>{error?.message}</p>;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExtendableText children={game?.description_raw} />

        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game?.id} />
        <GameScreenShots gameId={game?.id} />
      </GridItem>
    </SimpleGrid>
  );
};
