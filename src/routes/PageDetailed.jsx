import DetailedHero from "../components/DetailedHero";

import "../styles/detailed.css";
import "../styles/base.css";

import rating from "../assets/rating.svg";
import play from "../assets/play.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  appTitle,
  apiKey,
  apiBaseUrl,
  imageBaseUrl,
} from "../globals/globalVariables";
import Movie from "../components/Movie";

function PageDetailed() {
  const [movie, setMovie] = useState([]);
  // useParams Lets us grab the id from the url, which we set to the specific movie link in the Movie component, we can then use this id to fetch the specific movie data from the API and display it on the page
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    document.title = `${appTitle} - Movie`;
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`,
      );
      let data = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  return (
    <main>
      <>
        <section className="detailed-hero">
          <DetailedHero movie={movie} />
        </section>

        <div className="wrapper">
          <section className="detailed-info">
            <h1>{movie.title}</h1>

            <div className="rating-date">
              <img src={rating} className="rating-svg" />
              <span className="rating">NR</span>
              &bull;
              <span className="date">{movie.release_date}</span>
            </div>

            <p className="summary">{movie.overview}</p>

            <div className="genre-tags">
              {movie.genres && movie.genres.map((genre) => <a>{genre.name}</a>)}
            </div>
          </section>

          <section className="detailed-trailer">
            <h2>Trailer</h2>
            <div className="play-trailer-container">
              <img src="https://placehold.co/600x300" className="trailer" />
              <div className="play-svg-container">
                <img src={play} className="play-svg" />
              </div>
            </div>
          </section>
        </div>
      </>
    </main>
  );
}

export default PageDetailed;
