import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenre = () => ({ data: genre, isLoading: false, error: null });
