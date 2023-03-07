import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTvDetails, fetchSimilarTvSeries } from "../hooks/FetchDetails";
import { scrollToTop } from "../utils/utils";

const TvDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [similarTV, setSimilarTV] = useState([]);

  useEffect(() => {
    const getTvDetails = async (id) => {
      const response = await fetchTvDetails(id);
      setDetails(response);
    };
    const getSimilarTvSeries = async (id) => {
      const response = await fetchSimilarTvSeries(id);
      setSimilarTV(response?.results);
    };
    getTvDetails(id);
    getSimilarTvSeries(id);
  }, [id]);

  return (
    <div className="md:flex md:justify-between bg-gray-800 md:px-10 md:pb-6">
      <div className="md:basis-1/3">
        {details.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${details.poster_path}`}
            alt="celeb poster"
            className="details-img mx-auto pt-5"
          />
        )}
      </div>
      <div className="p-5 basis-2/3 text-white">
        <h1 className="text-xl md:text-3xl md:mb-5">{details.name}</h1>
        <p className="text-gray-300">{details.overview}</p>

        <section className="flex justify-between">
          {/* genres */}
          <div className="my-3">
            <h1 className="text-sm md:text-xl">Genres</h1>
            <ul className="ml-5">
              {details.genres?.map((genre) => (
                <li className="text-xs md:text-base list-disc" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-3">
            {details.created_by?.length > 0 && (
              <div>
                <h1 className="text-sm md:text-xl">Created By</h1>
                <ul className="ml-5">
                  {details.created_by?.map((creator) => (
                    <li
                      className="text-xs md:text-base list-disc"
                      key={creator.id}
                    >
                      {creator.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* production companies */}
          <div className="my-3">
            {details.created_by?.length > 0 && (
              <div>
                <h1 className="text-sm md:text-xl">Production Companies</h1>
                <ul className="ml-5">
                  {details.production_companies?.map((company) => (
                    <li
                      className="text-xs md:text-base list-disc"
                      key={company.id}
                    >
                      {company.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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

        <section className="mt-5">
          <h1 className="text-center md:text-start text-xl mb-3">
            View Similar Movies
          </h1>
          <div className="flex flex-col items-center md:justify-between md:flex-wrap md:flex-row">
            {similarTV.map((tv) => {
              return (
                tv.poster_path !== null && (
                  <div className="mini-card mb-5" key={tv.id}>
                    <Link to={`/tv-series/tv/${tv.id}`} onClick={scrollToTop}>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
                        alt="celeb poster"
                      />
                      <p>{tv.name}</p>
                    </Link>
                  </div>
                )
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TvDetails;
