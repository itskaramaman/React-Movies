import axios from "axios";

const movieAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  },
});

export const fetchCelebDetails = async (id) => {
  const response = await movieAxios.get(`/person/${id}`);
  return response.data;
};

export const fetchTvDetails = async (id) => {
  const response = await movieAxios.get(`/tv/${id}`);
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await movieAxios.get(`/movie/${id}`);
  return response.data;
};
