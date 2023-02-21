import { useState, useContext } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchSearchResults } from "../hooks/FetchDetails";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatch } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "CLEAR_SEARCH_RESULTS" });
    dispatch({ type: "SET_LOADING" });
    const searchTermResults = await fetchSearchResults(searchTerm);
    dispatch({ type: "SET_SEARCH_RESULTS", payload: searchTermResults });
    navigate("/search");
  };

  return (
    <div className="p-4">
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
