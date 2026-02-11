// includes fav button
// movie card includes ratings, description, date, title
import { imageBaseUrl } from "../globals/globalVariables";

function Movie({ movie, cardType }) {
  return (
    <div className={cardType}>
      <img src={`${imageBaseUrl}w500${movie.poster_path}`} alt={movie.title} />
    </div>
  );
}

export default Movie;
