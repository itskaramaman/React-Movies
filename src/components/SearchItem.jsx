import { Link } from "react-router-dom";

const SearchItem = ({ item, heading }) => {
  if (item.poster_path) {
    return (
      <div className="mini-card hdiv" key={item.id}>
        <Link
          to={
            heading === "title"
              ? `/movie/${item.id}`
              : `/tv-series/tv/${item.id}`
          }
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt="poster"
          />
          {heading === "title" ? (
            <p>{item.title.substring(0, 30)}</p>
          ) : (
            <p>{item.name.substring(0, 30)}</p>
          )}
        </Link>
      </div>
    );
  }

  if (item.profile_path) {
    return (
      <div className="mini-card hdiv" key={item.id}>
        <Link to={`/celebreties/celebreties/${item.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
            alt="poster"
          />
          <p>{item.name.substring(0, 30)}</p>
        </Link>
      </div>
    );
  }
  return;
};

export default SearchItem;
