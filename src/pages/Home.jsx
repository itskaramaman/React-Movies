import Search from "../components/Search";
import WatchList from "../components/WatchList";

const Home = () => {
  return (
    <div>
      <Search />
      <WatchList title="Coming Soon Movies" type="ComingSoonMovies" />
    </div>
  );
};

export default Home;
