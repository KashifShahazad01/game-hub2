import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import useGenreName from "../hooks/useGenreName";
import { usePlatformName } from "../hooks/usePlatformName";
interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { genre } = useGenreName(gameQuery.genreId);
  const { platform } = usePlatformName(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as={h1}>
      {heading}
    </Heading>
  );
};
