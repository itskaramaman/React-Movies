import { Link } from "react-router-dom";

const SearchItem = ({ item: movie }) => {
  console.log(movie);
  return (
    <div className="mini-card hdiv" key={movie.id}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt="celeb poster"
        />
        <p>{movie.title.substring(0, 30)}</p>
      </Link>
    </div>
  );
};

export default SearchItem;
