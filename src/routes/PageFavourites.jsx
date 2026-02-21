import "../styles/favourites.css";
import "../styles/movie-card.css";

import sadFlixiIcon from "../assets/icons/sad-flixi.svg";
import { useSelector } from "react-redux";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";

const PageFavourites = () => {
  useEffect(() => {
    document.title = `${appTitle} - Favourites`;
  }, []);

  const favs = useSelector((state) => state.favs.items);

  return (
    <div className="page-favourites">
      <div className="favourites-container">
        {favs.length < 1 ? (
          <div className="no-favourites">
            <img
              className="sad-flixi-icon"
              src={sadFlixiIcon}
              alt="Sad Flixi mascot"
            />

            <h1 className="favourites-heading">Oh no!</h1>

            <p className="favourites-message">You don't have any favorites.</p>

          <div className="fav-result-grid">

            {/* added .slice() to copy array then .reverse() to reverse the array
            to show recent added fav movies */}
            {favs.slice().reverse().map((movie, i) => {
                return <Movie key={i} 
                              movie={movie}
                              cardType="grid-card"
                              isFav={true} />
            })}

            <div className="add-favourite-box">
              <Link to="/">
                <span className="plus-icon">+</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="fav-result">
            <h1 className="fav-result-heading">Your Favourites</h1>

            <div className="fav-result-grid">
              {favs.map((movie, i) => {
                return (
                  <Movie
                    key={i}
                    movie={movie}
                    cardType="grid-card"
                    isFav={true}
                  />
                );
              })}

              <div className="add-favourite-box">
                <Link to="/">
                  <span className="plus-icon">+</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageFavourites;
