import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCelebDetails } from "../hooks/FetchDetails";

const CelebDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getCelebDetails = async (id) => {
      const response = await fetchCelebDetails(id);
      setDetails(response);
    };
    getCelebDetails(id);
  }, [id]);
  return (
    <div className="flex justify-between bg-gray-800 px-10 pb-6">
      <div className="basis-1/3">
        <img
          src={`https://image.tmdb.org/t/p/original/${details.profile_path}`}
          alt="celeb poster"
          className="details-img"
        />
      </div>
      <div className="basis-2/3 text-white">
        <h1 className="text-3xl mb-5">{details.name}</h1>
        <p className="text-gray-300">{details.biography}</p>
        <div className="flex justify-between my-5">
          <div className="dark-card">
            <h2>Birth Place</h2>
            <p>{details.place_of_birth}</p>
          </div>
          <div className="dark-card">
            <h2>Birthday</h2>
            <p>{details.birthday}</p>
          </div>
          <div className="dark-card">
            <h2>Known for</h2>
            <p>{details.known_for}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebDetails;
