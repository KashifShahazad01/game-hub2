import { useData } from "./useData";
import { Genre } from "./useGenre";

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
}
export const useGame = (selectedGenre: Genre | null) =>
  useData<Games>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
