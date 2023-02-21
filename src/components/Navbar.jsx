import Search from "./Search";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className=" bg-gray-900">
      <div className="flex justify-between">
        <Link to="/" className="text-white p-6 text-2xl">
          Movies World
        </Link>
        <Search />
      </div>
      <div className=" bg-gray-800">
        <section className="p-4 text-2xl text-white flex justify-around">
          <Link
            to="movies"
            className={
              location.pathname === "/movies" ? `text-blue-400` : `text-white`
            }
          >
            Movies
          </Link>
          <Link
            to="tv-series"
            className={
              location.pathname === "/tv-series"
                ? `text-blue-400`
                : `text-white`
            }
          >
            TV Series
          </Link>
          <Link
            to="celebreties"
            className={
              location.pathname === "/celebreties"
                ? `text-blue-400`
                : `text-white`
            }
          >
            Celebrities
          </Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
