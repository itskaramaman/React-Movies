const TvItem = ({ item }) => {
  return (
    <div className="card basis-2/7" key={item.id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt="TV poster"
      />

      <h1 className="text-xl my-2 font-medium">{item.original_name}</h1>
      <p className="text-gray">{item.overview.substring(0, 100) + "..."}</p>
      <p className="text-gray">Vote Avg: {item.vote_average}</p>
      <i className="text-green-900">First Air On: {item.first_air_date}</i>
    </div>
  );
};

export default TvItem;
