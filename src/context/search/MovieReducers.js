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
    case "COMING_SOON_MOVIES":
      return {
        ...state,
        comingSoonMovies: [...state.comingSoonMovies, ...action.payload],
        loading: false,
      };
    case "SEARCH_POPULAR_MOVIES":
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case "POPULAR_CELEBRETIES":
      return {
        ...state,
        celebreties: action.payload,
        loading: false,
      };
    case "POPULAR_TV_SERIES":
      return {
        ...state,
        tvSeries: [...state.tvSeries, ...action.payload],
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_COMING_SOON_MOVIES":
      return {
        ...state,
        comingSoonMovies: [],
        loading: false,
      };
    case "CLEAR_POPULAR_TV":
      return {
        ...state,
        tvSeries: [],
        loading: false,
      };
    case "CLEAR_POPULAR_CELEBRETIES":
      return {
        ...state,
        celebreties: [],
        loading: false,
      };
    default:
      return state;
  }
};

export default SearchReducer;
