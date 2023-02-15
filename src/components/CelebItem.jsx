import { Link } from "react-router-dom";

const CelebItem = ({ item }) => {
  const { id } = item;
  return (
    <div className="card basis-2/7 cursor-pointer" key={item.id}>
      <Link to={`celebreties/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
          alt="celeb profile"
        />
        <h1 className="text-xl my-2 font-medium">{item.name}</h1>
        <h1>Known for: {item.known_for_department}</h1>
      </Link>
    </div>
  );
};

export default CelebItem;
