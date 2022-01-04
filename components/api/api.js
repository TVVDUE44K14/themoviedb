import axios from "axios";
import { API_URL } from "/constant";
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "content-type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
