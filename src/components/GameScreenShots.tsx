import useScreenShots from "../hooks/useScreenShots";
import { Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
interface Props {
  gameId?: number;
}
const GameScreenShots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShots(gameId!);
  if (isLoading) return <Spinner />;
  if (error) return <Text>{error.message}</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShots;
