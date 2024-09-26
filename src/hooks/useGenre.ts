import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genre from "../data/genre";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
const apiClient = new APIClient<Genre>("/genres");
export const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 68 * 1000,
    initialData: { count: genre.length, results: genre },
  });
