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

export const fetchSimilarMovies = async (id) => {
  const response = await movieAxios.get(`/movie/${id}/similar`);
  return response.data;
};

export const fetchSimilarTvSeries = async (id) => {
  const response = await movieAxios.get(`/tv/${id}/similar`);
  return response.data;
};

export const fetchSearchResults = async (query) => {
  const response = await axios.all([
    movieAxios.get("/search/movie", {
      params: { query: query },
    }),
    movieAxios.get("/search/tv", {
      params: { query: query },
    }),
    movieAxios.get("/search/person", {
      params: { query: query },
    }),
  ]);

  return {
    movies: response[0].data.results,
    tv: response[1].data.results,
    celebrities: response[2].data.results,
  };
};
