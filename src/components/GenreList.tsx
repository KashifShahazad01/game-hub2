import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { Genre, useGenre } from "../hooks/useGenre";
import { OptimizeImages } from "../services/OptimizeImages";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenre();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                overflow={"hidden"}
                borderRadius={6}
                src={OptimizeImages(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : ""}
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
