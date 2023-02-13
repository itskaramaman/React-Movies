import PropTypes from "prop-types";
import { BiMoviePlay } from "react-icons/bi";

const WatchItem = ({ item }) => {
  return (
    <div className="card basis-2/7" key={item.id}>
      {item.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
          alt="movie poster"
        />
      ) : (
        <BiMoviePlay width={400} />
      )}

      <h1 className="text-xl my-2 font-medium">{item.original_title}</h1>
      <p className="text-gray">{item.overview.substring(0, 100)}</p>
      <i className="text-green-900">Released On: {item.release_date}</i>
    </div>
  );
};

WatchItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default WatchItem;
