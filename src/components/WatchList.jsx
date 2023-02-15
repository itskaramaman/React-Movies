import WatchItem from "./WatchItem";
import CelebItem from "./CelebItem";
import TvItem from "./TvItem";

const WatchList = ({ title, list }) => {
  return (
    <div className=" bg-gray-600 p-10">
      <h1 className=" text-white text-2xl p-5">{title}</h1>
      <div className="flex justify-around flex-wrap gap-3">
        {title === "Celebreties"
          ? list.map((item) => <CelebItem item={item} key={item.id} />)
          : title === "TV Series"
          ? list.map((item) => <TvItem item={item} key={item.id} />)
          : list.map((item) => <WatchItem item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default WatchList;
