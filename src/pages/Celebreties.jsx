import { useContext, useEffect, useState } from "react";
import MovieContext from "../context/search/MovieContext";
import { fetchPopularPeople } from "../context/search/MovieAction";
import WatchList from "../components/WatchList";

const Celebrities = () => {
  const { state, dispatch } = useContext(MovieContext);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch({ type: "CLEAR_POPULAR_CELEBRETIES" });
  }, [dispatch]);

  useEffect(() => {
    const fetchPopularCelebreties = async (pageNumber) => {
      dispatch({ type: "SET_LOADING" });
      const movies = await fetchPopularPeople(pageNumber);
      dispatch({ type: "POPULAR_CELEBRETIES", payload: movies });
    };

    fetchPopularCelebreties(pageNumber);
  }, [dispatch, pageNumber]);

  return (
    <WatchList
      title="Celebrities"
      list={state.celebreties}
      setPageNumber={setPageNumber}
    />
  );
};

export default Celebrities;
