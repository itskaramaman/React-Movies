import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchPopularTVShows } from "../context/search/MovieAction";
import WatchList from "../components/WatchList";

const TV = () => {
  const { state, dispatch } = useContext(MovieContext);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch({ type: "CLEAR_POPULAR_TV" });
  }, [dispatch]);

  useEffect(() => {
    const popularTV = async (pageNumber) => {
      dispatch({ type: "SET_LOADING" });
      const tv = await fetchPopularTVShows(pageNumber);
      dispatch({ type: "POPULAR_TV_SERIES", payload: tv });
    };

    popularTV(pageNumber);
  }, [dispatch, pageNumber]);

  return (
    <WatchList
      title="TV Series"
      list={state.tvSeries}
      setPageNumber={setPageNumber}
    />
  );
};

export default TV;
