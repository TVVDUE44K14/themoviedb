import axiosClient from "/components/api/api";
import { API_KEY } from "/constant/common";
const movieAPI = {
  getAllMovies: (data) => {
    const url = "/popular";
    const params = {
      api_key: API_KEY,
      page: data.page,
    };

    return axiosClient.get(url, { params });
  },
  getProvider: (data) => {
    const url = `/${data}/watch/providers`;
    const params = {
      api_key: API_KEY,
    };
    return axiosClient.get(url, { params });
  },
  getDetailMovie: (data) => {
    const url = `/${data}`;
    const params = {
      api_key: API_KEY,
    };
    return axiosClient.get(url, { params });
  },
  getAllImages: (data) => {
    const url = `/${data}/images`;
    const params = {
      api_key: API_KEY,
    };
    return axiosClient.get(url, { params });
  },
};
export default movieAPI;
