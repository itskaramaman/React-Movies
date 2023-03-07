import { useContext } from "react";
import MovieContext from "../context/search/MovieContext";
import SearchList from "../components/SearchList";

const SearchResults = () => {
  const { state } = useContext(MovieContext);

  return (
    <div className="bg-gray-900">
      <h1 className=" px-5 text-2xl text-white">Search Results</h1>
      <SearchList title="Movies" searchResults={state.searchResults?.movies} />
      <SearchList title="TV Series" searchResults={state.searchResults?.tv} />
      <SearchList
        title="Celebrities"
        searchResults={state.searchResults?.celebrities}
      />
    </div>
  );
};

export default SearchResults;
