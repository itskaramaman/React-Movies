import { useState, useContext } from "react";
import { fetchSearchTermResults } from "../context/search/MovieAction";
import SearchContext from "../context/search/MovieContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useContext(SearchContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    const searchTermResults = await fetchSearchTermResults(searchTerm);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchTermResults.d });
  };

  return (
    <div className=" bg-gray-200 p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="p-1 mr-2"
          placeholder="Search your next watch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
