import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { OptimizeImages } from "../services/OptimizeImages";

export const GenreList = () => {
  const { data: genres } = useGenre();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              overflow={"hidden"}
              borderRadius={6}
              src={OptimizeImages(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
