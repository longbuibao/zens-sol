import axios from "axios";

console.log(
  import.meta.env.PROD ? "http://back_end:3000" : "http://localhost:3000"
);

const axiosClient = axios.create({
  baseURL: import.meta.env.PROD
    ? "http://back_end:3000"
    : "http://localhost:3000",
});

export default axiosClient;
