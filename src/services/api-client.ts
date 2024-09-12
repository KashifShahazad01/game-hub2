import axios from "axios";
export default axios.create({
  params: {
    key: "4f0dda9453774eb692eaff7a71059088",
  },
  baseURL: "https://api.rawg.io/api",
});
