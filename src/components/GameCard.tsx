import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Games;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack>
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};
