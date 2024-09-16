import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as={h1}>
      {heading}
    </Heading>
  );
};
