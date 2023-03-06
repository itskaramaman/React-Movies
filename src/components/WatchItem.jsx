import PropTypes from "prop-types";
import { BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";
import { v4 as uuid4 } from "uuid";

const WatchItem = ({ item, lastElementRef }) => {
  const { id } = item;

  if (lastElementRef) {
    return (
      <div
        className="card basis-2/7"
        key={`${item.id - uuid4()}`}
        ref={lastElementRef}
      >
        <Link to={`/movie/${id}`}>
          {item.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt="movie poster"
            />
          ) : (
            <BiMoviePlay width={400} />
          )}

          <h1 className="text-xl my-2 font-medium">{item.original_title}</h1>
          <p className="text-gray">{item.overview.substring(0, 100) + "..."}</p>
          <i className="text-green-900">Released On: {item.release_date}</i>
        </Link>
      </div>
    );
  }
  return (
    <div className="card basis-2/7" key={`${item.id - uuid4()}`}>
      <Link to={`/movie/${id}`}>
        {item.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt="movie poster"
          />
        ) : (
          <BiMoviePlay width={400} />
        )}

        <h1 className="text-xl my-2 font-medium">{item.original_title}</h1>
        <p className="text-gray">{item.overview.substring(0, 100) + "..."}</p>
        <i className="text-green-900">Released On: {item.release_date}</i>
      </Link>
    </div>
  );
};

WatchItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

export default WatchItem;
