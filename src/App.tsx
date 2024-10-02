import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid } from "./components/GameGrid";
import { GameHeading } from "./components/GameHeading";
import { GenreList } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav  nav"  "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} paddingX={"5px"}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={4}>
          {<GameHeading />}
          <Flex paddingBottom={5}>
            <PlatformSelector />
            <Box marginLeft={5}>
              <SortSelector />
            </Box>
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
