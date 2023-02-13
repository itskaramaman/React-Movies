import { useContext, useEffect } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchComingSoonMovies } from "../context/search/MovieAction";
import WatchItem from "./WatchItem";

const WatchList = ({ title, type }) => {
  const { state, dispatch } = useContext(MovieContext);

  useEffect(() => {
    const comingSoonMovies = async () => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchComingSoonMovies();
      dispatch({ type: "COMING_SOON_MOVIES", payload: movies });
    };

    comingSoonMovies();
  }, [dispatch]);

  return (
    <div className=" bg-gray-600 p-10">
      <h1 className=" text-white text-2xl p-5">{title}</h1>
      <div className="flex justify-around flex-wrap gap-3">
        {state.comingSoonMovies.map((movie) => (
          <WatchItem item={movie} />
        ))}
      </div>
    </div>
  );
};

export default WatchList;
