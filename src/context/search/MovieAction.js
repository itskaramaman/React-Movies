import axios from "axios";

const movieAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  },
});

export async function fetchComingSoonMovies(page = 1) {
  const response = await movieAxios.get(`/movie/upcoming`, {
    params: { page },
  });
  return response.data?.results;
}

export async function fetchPopularTVShows(page = 1) {
  const response = await movieAxios.get("/tv/popular", { params: { page } });
  return response.data?.results;
}

export async function fetchPopularPeople(page = 1) {
  const response = await movieAxios.get("/person/popular", {
    params: { page },
  });
  return response.data?.results;
}
