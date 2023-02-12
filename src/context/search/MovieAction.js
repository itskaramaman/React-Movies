import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "3829f52d12msh91e016ca76b1e6cp1e0d52jsncca1cb0c4528",
  "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
};

const movies = axios.create({
  baseURL: "https://online-movie-database.p.rapidapi.com",
  headers,
});

export async function fetchSearchTermResults(searchTerm) {
  const response = await movies.get("/auto-complete", {
    params: { q: searchTerm },
    headers,
  });
  return response.data;
}

export async function fetchPopularMovies() {
  const response = await movies.get("/title/get-most-popular-movies", {
    params: { currentCountry: "US", purchaseCountry: "US", homeCountry: "US" },
    headers,
  });
  return response.data;
}
