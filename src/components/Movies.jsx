import { useContext, useEffect } from "react";
import SearchContext from "../context/search/MovieContext";
import { fetchPopularMovies } from "../context/search/MovieAction";

const WatchItem = ({ title }) => {
  const { state, dispatch } = useContext(SearchContext);

  useEffect(() => {
    const popularMovies = async () => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchPopularMovies();
      console.log(movies);
      dispatch({ type: "SEARCH_POPULAR_MOVIES", payload: movies });
    };

    popularMovies();
  }, [dispatch]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{JSON.stringify(state)}</p>
    </div>
  );
};

export default WatchItem;
