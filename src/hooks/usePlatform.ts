import { useData } from "./useData";
interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatffrom = () => useData<Platform>("/platforms/lists/parents");

export default usePlatffrom;
