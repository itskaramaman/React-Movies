import axios from "axios";

const movieAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
  },
});

// @Todo correct as per new api
export async function fetchSearchTermResults(searchTerm) {}

// @Todo correct as per new api
export async function fetchPopularMovies() {}

export async function fetchComingSoonMovies() {
  const response = await movieAxios.get("/movie/upcoming");

  return response.data?.results;
}

export async function fetchMoviesById(id) {
  // @Todo correct as per new api
}
