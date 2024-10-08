import { SimpleGrid, Text } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";
import { CriticScore } from "./CriticScore";
import { DefinationItem } from "./DefinationItem";

interface Props {
  game?: Games;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinationItem term="Platforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term="Metascore">
        <CriticScore score={23} />
      </DefinationItem>
      <DefinationItem term={"Genre"}>
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItem>
      <DefinationItem term="Publisher">
        {game?.publisher?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
