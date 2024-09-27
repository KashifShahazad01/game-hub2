import usePlatffrom from "./usePlatform";

export const usePlatformName = (id?: number) => {
  const { data: platforms } = usePlatffrom();

  const platform = platforms?.results.find((p) => p.id === id);
  return { platform };
};
