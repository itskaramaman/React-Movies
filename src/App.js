import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { SearchProvider } from "./context/search/MovieContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <Home />
      </SearchProvider>
    </>
  );
}

export default App;
