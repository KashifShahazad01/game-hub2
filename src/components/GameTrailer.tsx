import { Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailer";
interface Props {
  gameId?: number;
}
export const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useTrailers(gameId!);
  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;
  const first = data?.results[0];
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};
