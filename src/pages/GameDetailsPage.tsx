import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import { ExtendableText } from "../components/ExtendableText";

export const GameDetailsPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) <Spinner />;
  if (error || !game) <p>{error?.message}</p>;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExtendableText children={game?.description_raw} />
    </>
  );
};
