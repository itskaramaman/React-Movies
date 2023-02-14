import { useContext, useEffect } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchPopularTVShows } from "../context/search/MovieAction";
import WatchList from "../components/WatchList";

const TV = () => {
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    const comingSoonMovies = async () => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchPopularTVShows();
      dispatch({ type: "POPULAR_TV_SERIES", payload: movies });
    };

    comingSoonMovies();
  }, [dispatch]);

  return <WatchList title="TV Series" list={state.tvSeries} />;
};

export default TV;
