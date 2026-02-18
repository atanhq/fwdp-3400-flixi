// hero image, movie poster, info, genre tags (links to search)
// trailer
import { imageBaseUrl } from "../globals/globalVariables";
import noPoster from '../assets/no-poster.png';
import noBackdrop from '../assets/no-backdrop.png';

function DetailedHero({ movie }) {
  if (!movie) return null;
  return (
    <>
      <div className="detailed-container">
        <div className="detailed-hero">
          <img
            src={movie.poster_path === null ?
            `${noBackdrop}`
            :
            `${imageBaseUrl}w1280${movie.backdrop_path}`}
            alt="Movie backdrop"
            className="detailed-hero"
          />
        </div>
      </div>

      <div className="detailed-poster">
        <img
          src={movie.poster_path === null ?
          `${noPoster}`
          :
          `${imageBaseUrl}w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </>
  );
}

export default DetailedHero;
