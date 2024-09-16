import notFound from "../assets/images.png";
export const OptimizeImages = (url: string) => {
  if (!url) return notFound;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
