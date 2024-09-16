import platform from "../data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatffrom = () => ({ data: platform, isLoading: false, error: false });

export default usePlatffrom;
