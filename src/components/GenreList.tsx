import { useGenre } from "../hooks/useGenre";

export const GenreList = () => {
  const { data: genres } = useGenre();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
