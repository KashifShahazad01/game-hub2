import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import { OptimizeImages } from "../services/OptimizeImages";

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} width={"300px"}>
        <Image src={OptimizeImages(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};
