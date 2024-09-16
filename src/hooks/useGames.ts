import { GameQuery } from "../App";
import { useData } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Games {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
}
export const useGame = (gameQuery: GameQuery | null) =>
  useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.order,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );
