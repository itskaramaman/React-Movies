import { createContext, useReducer } from "react";
import SearchReducer from "./MovieReducers";

// @Todo Coorect the names of context files
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const initialState = {
    searchResults: [],
    movies: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
