import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3004",
  timeout: 5000,
});

instance.interceptors.request.use((req) => {
  // console.log(`${req.method} ${req.url}`);
  return req;
});

instance.interceptors.response.use(
  (res) => {
    // console.log(res.data);
    return res;
  },
  (err) => {
    if (err.response.status === 404) {
      throw new Error(`${err.config.url} not found`);
    }
    throw err;
  }
);

export default instance;
