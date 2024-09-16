import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { OptimizeImages } from "../services/OptimizeImages";
import { Emoji } from "./Emoji";

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={OptimizeImages(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize={"2xl"} marginBottom={1}>
            {game.name}
          </Heading>
          <Emoji rating={game.rating_top} />
        </CardBody>
      </Card>
    </>
  );
};
