import { useContext } from "react";
import MovieContext from "../context/search/MovieContext";
import SearchList from "../components/SearchList";

const SearchResults = () => {
  const { state } = useContext(MovieContext);

  return (
    <div className="bg-gray-900">
      <h1>Search Result</h1>
      <SearchList title="Movies" searchResults={state.searchResults} />
      <SearchList searchResults={state.searchResults} />
    </div>
  );
};

export default SearchResults;
