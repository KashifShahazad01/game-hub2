import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { OptimizeImages } from "../services/OptimizeImages";

export const GenreList = () => {
  const { data: genres, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
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
