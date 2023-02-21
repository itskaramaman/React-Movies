import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/search/MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebrities from "./pages/Celebreties";
import CelebDetails from "./components/CelebDetails";
import TvDetails from "./components/TvDetails";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="tv-series" element={<TV />} />
            <Route path="celebreties" element={<Celebrities />} />
            <Route
              path="celebreties/celebreties/:id"
              element={<CelebDetails />}
            />
            <Route path="tv-series/tv/:id" element={<TvDetails />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
