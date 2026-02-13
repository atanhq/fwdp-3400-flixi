// hero image, movie poster, info, genre tags (links to search)
// trailer
import { imageBaseUrl } from "../globals/globalVariables";

function DetailedHero({ movie }) {
  if (!movie) return null;
  return (
    <>
      <div className="detailed-container">
        <div className="detailed-hero">
          <img
            src={`${imageBaseUrl}w1280${movie.backdrop_path}`}
            alt="Movie backdrop"
            className="detailed-hero"
          />
        </div>
      </div>

      <div className="detailed-poster">
        <img
          src={`${imageBaseUrl}w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </>
  );
}

export default DetailedHero;
