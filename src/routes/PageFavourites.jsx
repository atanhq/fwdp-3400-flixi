import "../styles/favourites.css";
import sadFlixiIcon from "../assets/icons/sad-flixi.svg";

const PageFavourites = () => {
  return (
    <div className="page-favourites">
      <div className="favourites-container">
        <img
          className="sad-flixi-icon"
          src={sadFlixiIcon}
          alt="Sad Flixi mascot"
        />

        <h1 className="favourites-heading">Oh no!</h1>

        <p className="favourites-message">You don't have any favorites.</p>

        <div className="add-favourite-box">
          <span className="plus-icon">+</span>
        </div>
      </div>
    </div>
  );
};

export default PageFavourites;
