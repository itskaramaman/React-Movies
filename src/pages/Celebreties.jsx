import { useContext, useEffect } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchPopularPeople } from "../context/search/MovieAction";
import WatchList from "../components/WatchList";

const Celebrities = () => {
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    const fetchPopularCelebreties = async () => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchPopularPeople();
      dispatch({ type: "POPULAR_CELEBRETIES", payload: movies });
    };

    fetchPopularCelebreties();
  }, [dispatch]);

  return <WatchList title="Celebreties" list={state.celebreties} />;
};

export default Celebrities;
