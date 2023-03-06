import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchComingSoonMovies } from "../context/search/MovieAction";
import WatchList from "../components/WatchList";

const Movies = () => {
  const { state, dispatch } = useContext(MovieContext);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch({ type: "CLEAR_COMING_SOON_MOVIES" });
  }, [dispatch]);

  useEffect(() => {
    const comingSoonMovies = async (pageNumber) => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchComingSoonMovies(pageNumber);
      dispatch({ type: "COMING_SOON_MOVIES", payload: movies });
    };
    comingSoonMovies(pageNumber);
  }, [dispatch, pageNumber]);

  return (
    <WatchList
      title="Coming Soon Movies"
      list={state.comingSoonMovies}
      setPageNumber={setPageNumber}
    />
  );
};

export default Movies;
