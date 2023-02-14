import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/search/MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebrities from "./pages/Celebreties";

function App() {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Navbar />
          <Routes>
            <Route path="movies" element={<Movies />} />
            <Route path="tv-series" element={<TV />} />
            <Route path="celebrities" element={<Celebrities />} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
