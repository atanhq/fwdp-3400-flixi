// includes fav button
// movie card includes ratings, description, date, title
import { imageBaseUrl } from "../globals/globalVariables";
import { Link } from "react-router-dom";

function Movie({ movie, cardType }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className={cardType}>
        <img
          src={`${imageBaseUrl}w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </Link>
  );
}

export default Movie;
