import axios, { AxiosRequestConfig } from "axios";

export interface FetchingResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosIntance = axios.create({
  params: {
    key: "4f0dda9453774eb692eaff7a71059088",
  },
  baseURL: "https://api.rawg.io/api",
});
class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) => {
    return axiosIntance
      .get<FetchingResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosIntance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
export default APIClient;
