const SearchReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: action.payload,
        loading: false,
      };
    case "CLEAR_SEARCH_RESULTS":
      return {
        ...state,
        searchResults: [],
        loading: false,
      };
    case "SEARCH_POPULAR_MOVIES":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default SearchReducer;
