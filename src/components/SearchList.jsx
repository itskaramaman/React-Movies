import SearchItem from "./SearchItem";

const SearchList = ({ title, searchResults }) => {
  return (
    <div className="px-5 md:px-10 py-5">
      <h1 className="text-white text-2xl">{title}</h1>
      <div className="bg-dark-800 search-result scroll-smooth">
        {searchResults.map((result) => (
          <SearchItem
            key={result.id}
            item={result}
            id={result.id}
            heading={title === "Movies" ? "title" : "name"}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
