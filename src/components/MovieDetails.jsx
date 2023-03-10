import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchMovieDetails, fetchSimilarMovies } from "../hooks/FetchDetails";
import { scrollToTop } from "../utils/utils";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const getMovieDetails = async (id) => {
      const response = await fetchMovieDetails(id);
      setDetails(response);
    };
    const getSimilarMovies = async (id) => {
      const response = await fetchSimilarMovies(id);
      setSimilarMovies(response.results);
    };
    getMovieDetails(id);
    getSimilarMovies(id);
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
      <div className="p-5 md:basis-2/3 text-white">
        <h1 className="text-xl md:text-3xl md:mb-5">{details.title}</h1>
        <p className="text-gray-300">{details.overview}</p>
        <section className="flex justify-between">
          {/* genres */}
          <div className="my-3">
            <h1 className=" text-sm md:text-xl">Genres</h1>
            <ul className="ml-5">
              {details.genres?.map((genre) => (
                <li className="text-xs md:text-base list-disc" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-3">
            <h1 className="text-sm md:text-xl">Released Date</h1>
            <li className="text-xs md:text-base list-disc">
              {details.release_date}
            </li>
          </div>

          {/* production companies */}
          <div className="my-3">
            <h1 className="text-sm md:text-xl">Production Companies</h1>
            <ul className="ml-5">
              {details.production_companies?.map((company) => (
                <li className="text-xs md:text-base list-disc" key={company.id}>
                  {company.name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-5">
          <h1 className="text-center md:text-start text-xl mb-3">
            View Similar Movies
          </h1>
          <div className="flex flex-col items-center md:justify-between md:flex-wrap md:flex-row">
            {similarMovies.map((movie) => {
              return (
                movie.poster_path !== null && (
                  <div className="mini-card mb-5" key={movie.id}>
                    <Link to={`/movie/${movie.id}`} onClick={scrollToTop}>
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt="celeb poster"
                      />
                      <p>{movie.title}</p>
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

export default MovieDetails;
