import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCelebDetails } from "../hooks/FetchDetails";

const CelebDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [showCompleteBiography, setShowCompleteBiography] = useState(false);

  const biography = showCompleteBiography
    ? details.biography
    : details.biography?.substring(0, 300) + "...";

  useEffect(() => {
    const getCelebDetails = async (id) => {
      const response = await fetchCelebDetails(id);
      setDetails(response);
    };
    getCelebDetails(id);
  }, [id]);

  return (
    <div className="md:flex md:justify-between bg-gray-800 md:px-10 md:pb-6">
      <div className="md:basis-1/3">
        {details.profile_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${details.profile_path}`}
            alt="celeb poster"
            className="details-img mx-auto pt-5"
          />
        )}
      </div>
      <div className="p-5 md:basis-2/3 text-white">
        <h1 className="text-xl md:text-3xl md:mb-5">{details.name}</h1>
        <p className="text-gray-300">{biography}</p>
        {!showCompleteBiography && (
          <i
            className="cursor-pointer"
            onClick={() => setShowCompleteBiography(true)}
          >
            Read more
          </i>
        )}

        <section className="flex justify-between mt-5">
          <div>
            <h1>
              <b>Birthday: </b>
              {details.birthday}
            </h1>
          </div>
          <div>
            <h1>
              <b>Birth Place:</b> {details.place_of_birth}
            </h1>
          </div>
          <div>
            <h1>
              <b>Known for: </b>
              {details.known_for_department}
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CelebDetails;
