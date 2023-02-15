import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-gray-900">
      <div className="flex justify-between">
        <h1 className="text-white p-6 text-2xl">Movies World</h1>
        <Search />
      </div>
      <div className=" bg-gray-800">
        <section className="p-4 text-2xl text-white flex justify-around">
          <Link to="movies">Movies</Link>
          <Link to="tv-series">TV Series</Link>
          <Link to="celebreties">Celebrities</Link>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
