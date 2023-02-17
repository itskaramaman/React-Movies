import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../hooks/FetchDetails";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const getMovieDetails = async (id) => {
      const response = await fetchMovieDetails(id);
      setDetails(response);
    };
    getMovieDetails(id);
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
        <h1 className="text-3xl mb-5">{details.title}</h1>
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
            <h1 className="text-xl">Released Date</h1>
            <li className="list-disc">{details.release_date}</li>
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
      </div>
    </div>
  );
};

export default MovieDetails;
