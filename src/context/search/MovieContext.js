import { createContext, useReducer } from "react";
import SearchReducer from "./MovieReducers";

// @Todo Coorect the names of context files
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const initialState = {
    searchResults: [],
    movies: [],
    comingSoonMovies: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
