// includes fav button
// movie card includes ratings, description, date, title
import { imageBaseUrl } from "../globals/globalVariables";
import { Link } from "react-router-dom";

import notFavouritedIcon from "../assets/icons/not-favourited.svg";

import rating from "../assets/rating.svg";
import "../styles/movie-card.css";

function Movie({ movie, cardType }) {
  return (
    <div className={cardType}>

      {/* hover effect for desktop movie-cards */}

        <div className="movie-card-hover-info">

          <h1 className="hero-title">{movie.title}</h1>

          <p className="date">{movie.release_date}</p>
          <img src={rating} className="rating-svg" />
          <span className="rating">{movie.vote_average?.toFixed(2)}</span>

          <p className="hero-description">
            {movie.overview.length > 80
              ? movie.overview.slice(0, 80) + "..."
              : movie.overview}
          </p>

          <div className="movie-card-buttons-wrapper">
            <div className="hero-button-wrapper">
              <Link to={`/movie/${movie.id}`} className="hero-button">
                More
              </Link>
            </div>

            <div className="favourite-button-wrapper">
              <img
                  className="not-favourited"
                  src={notFavouritedIcon}
                  alt="not favourites icon"
                />
            </div>
          </div>

        </div>


      {/* end hover effect section; movie card for tablet/mobile */}

      <div className="movie-card-hover">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`${imageBaseUrl}w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
      </div>

    </div>
  );
}

export default Movie;
