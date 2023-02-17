import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTvDetails } from "../hooks/FetchDetails";

const TvDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getTvDetails = async (id) => {
      const response = await fetchTvDetails(id);
      console.log(response);
      setDetails(response);
    };
    getTvDetails(id);
  }, [id]);

  return (
    <div className="flex justify-between bg-gray-800 px-10 pb-6">
      <div className="basis-1/3">
        {details.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
            alt="celeb poster"
            className="details-img"
          />
        )}
      </div>
      <div className="basis-2/3 text-white">
        <h1 className="text-3xl mb-5">{details.name}</h1>
        <p className="text-gray-300">{details.overview}</p>

        <section className="flex justify-between">
          {/* genres */}
          <div className="my-3">
            <h1 className="text-xl">Genres</h1>
            <ul className="ml-5">
              {details.genres?.map((genre) => (
                <li className="list-disc" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-3">
            <h1 className="text-xl">Created By</h1>
            <ul className="ml-5">
              {details.created_by?.map((creator) => (
                <li className="list-disc" key={creator.id}>
                  {creator.name}
                </li>
              ))}
            </ul>
          </div>

          {/* production companies */}
          <div className="my-3">
            <h1 className="text-xl">Production Companies</h1>
            <ul className="ml-5">
              {details.production_companies?.map((company) => (
                <li className="list-disc" key={company.id}>
                  {company.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h1 className="text-xl">Seasons Info</h1>
          <ul className="ml-5">
            <li className="list-disc">
              Number of Seasons: {details.number_of_seasons}
            </li>
            <li className="list-disc">
              Number of Episodes: {details.number_of_episodes}
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TvDetails;
