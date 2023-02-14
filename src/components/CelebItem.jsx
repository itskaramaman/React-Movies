import { Link } from "react-router-dom";

const CelebItem = ({ item }) => {
  return (
    <div className="card basis-2/7" key={item.id}>
      <img
        src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
        alt="celeb profile"
      />
      <h1 className="text-xl my-2 font-medium">{item.name}</h1>
      <Link className="text-green-900">Know more...</Link>
    </div>
  );
};

export default CelebItem;
