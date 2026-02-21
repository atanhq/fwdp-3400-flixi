// includes fav button
// movie card includes ratings, description, date, title
import { imageBaseUrl } from "../globals/globalVariables";
import { Link } from "react-router-dom";
import noPoster from '../assets/no-poster.png';

// favourites
import { useDispatch } from 'react-redux';
import FavHeart from "./FavHeart";
import { addFav, deleteFav } from '../features/favsSlice';

import rating from "../assets/rating.svg";
import "../styles/movie-card.css";

function Movie({ movie, cardType, isFav }) {

    const dispatch = useDispatch();

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
            console.log("added!");
        }else{
            dispatch(deleteFav(obj));
            console.log("deleted!");
        }
    }

  return (
    <div className={cardType}>

      {/* hover effect for desktop movie-cards */}

        <div className="movie-card-hover-info">

          <h1 className="hero-title">{movie.title}</h1>

          <p className="date">{movie.release_date}</p>

          <div className="rating-wrapper">
            <img src={rating} className="rating-svg" />
            <span className="rating">{movie.vote_average?.toFixed(1)}</span>
          </div>

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
              {isFav ?
                    <FavHeart movie={movie} 
                              remove={true}
                              handleFavClick={handleFavClick}  /> 
                    :
                    <FavHeart movie={movie}
                              remove={false}
                              handleFavClick={handleFavClick}  />
                }
                
            </div>
          </div>

        </div>


      {/* end hover effect section; movie card for tablet/mobile */}

      <div className="movie-card-hover">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={movie.poster_path === null ?
            `${noPoster}`
            :
            `${imageBaseUrl}w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Link>
      </div>

    </div>
  );
}

export default Movie;
