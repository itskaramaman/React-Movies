import Navbar from "./components/Navbar";
import { MovieProvider } from "./context/search/MovieContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebrities from "./pages/Celebreties";
import CelebDetails from "./components/CelebDetails";

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
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
