import SearchItem from "./SearchItem";

const SearchList = ({ title, searchResults }) => {
  return (
    <div className="p-10">
      <h1 className="text-white text-2xl mb-2">{title}</h1>
      <div className="bg-dark-800 search-result scroll-smooth">
        {searchResults.map((result) => (
          <SearchItem item={result} id={result.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
