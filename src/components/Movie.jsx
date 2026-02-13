// includes fav button
// movie card includes ratings, description, date, title
import { imageBaseUrl } from "../globals/globalVariables";
import { Link } from "react-router-dom";

function Movie({ movie, cardType }) {
  return (
    <div className={cardType}>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${imageBaseUrl}w500${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
    </div>
  );
}

export default Movie;
