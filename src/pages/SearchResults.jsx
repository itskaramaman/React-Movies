import { useContext } from "react";
import WatchList from "../components/WatchList";
import MovieContext from "../context/search/MovieContext";

const SearchResults = () => {
  const { state } = useContext(MovieContext);
  //   console.log(state.searchResults.slice(20, 20));

  return (
    <>
      <WatchList title="Search Results" list={state.searchResults} />
      {/* <WatchList title="TV Series" list={state.searchResults.slice(20, 20)} />
      <WatchList title="Celebreties" list={state.searchResults.slice(40, 20)} /> */}
    </>
  );
};

export default SearchResults;
