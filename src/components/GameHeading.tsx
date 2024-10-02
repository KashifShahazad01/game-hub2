import { Heading } from "@chakra-ui/react";
import useGenreName from "../hooks/useGenreName";
import { usePlatformName } from "../hooks/usePlatformName";
import useGameQueryStore from "../store";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { genre } = useGenreName(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { platform } = usePlatformName(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};
