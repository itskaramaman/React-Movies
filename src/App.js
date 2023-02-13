import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MovieProvider } from "./context/search/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <Home />
      </MovieProvider>
    </>
  );
}

export default App;
