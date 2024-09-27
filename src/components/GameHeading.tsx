import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import { useGenre } from "../hooks/useGenre";
import usePlatffrom from "../hooks/usePlatform";
interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatffrom();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as={h1}>
      {heading}
    </Heading>
  );
};
