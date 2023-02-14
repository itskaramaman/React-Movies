import { useContext, useEffect } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchComingSoonMovies } from "../context/search/MovieAction";
import WatchList from "../components/WatchList";

const Movies = () => {
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    const comingSoonMovies = async () => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchComingSoonMovies();
      dispatch({ type: "COMING_SOON_MOVIES", payload: movies });
    };

    comingSoonMovies();
  }, [dispatch]);

  return <WatchList title="Coming Soon Movies" list={state.comingSoonMovies} />;
};

export default Movies;
