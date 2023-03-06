import WatchItem from "./WatchItem";
import CelebItem from "./CelebItem";
import TvItem from "./TvItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { scrollToTop } from "../utils/utils";

const WatchList = ({ title, list, setPageNumber }) => {
  return (
    <div className=" bg-gray-600 p-5 md:p-10 relative">
      <h1 className=" text-white text-xl md:text-2xl pb-3 md:p-5">{title}</h1>

      {window.scrollY > window.innerHeight && (
        <BsFillArrowUpCircleFill
          onClick={() => scrollToTop()}
          className="text-3xl fixed right-5 text-blue-400 cursor-pointer"
        />
      )}

      <InfiniteScroll
        dataLength={list.length}
        next={() => setPageNumber((prev) => prev + 1)}
        hasMore={true}
        className="md:flex md:justify-around md:flex-wrap md:gap-3"
      >
        {title === "Celebrities"
          ? list.map((item) => <CelebItem item={item} key={item.id} />)
          : title === "TV Series"
          ? list.map((item) => <TvItem item={item} key={item.id} />)
          : list.map((item) => <WatchItem item={item} key={item.id} />)}
      </InfiniteScroll>
    </div>
  );
};

export default WatchList;
