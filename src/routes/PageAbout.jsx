import "../styles/about.css";
import flixiIcon from "../assets/icons/sad-flixi.svg";

const PageAbout = () => {
  return (
    <div className="page-about">
      <div className="about-container">
        <h1 className="about-heading">
          About <span className="accent">Flixi</span>
        </h1>

        <img className="flixi-icon" src={flixiIcon} alt="Flixi sad mascot" />

        <div className="about-description">
          <p>
            Flixi is our loveable TV robot that loves movies! It travels far and
            wide in search of films and compiles them into a database to share
            with us humans. Users can log favorite movies, watch trailers, and
            view ratings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageAbout;
