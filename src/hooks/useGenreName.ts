import { useGenre } from "./useGenre";

const useGenreName = (id?: number) => {
  const { data: genres } = useGenre();

  const genre = genres?.results.find((g) => g.id === id);
  return { genre };
};

export default useGenreName;
