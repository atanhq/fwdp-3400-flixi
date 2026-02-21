import "../styles/about.css";
import flixiIcon from "../assets/icons/happyflixi.svg";
import tmdbLogo from "../assets/icons/tmdb-logo.svg";
import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";

const PageAbout = () => {
  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

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
            view ratings. All our resources are from TMDB.
          </p>
        </div>
        <div className="about-api-use">
          <p>
            This product uses the TMDb API but is not endorsed or certified by
            TMDb.
          </p>
          <img src={tmdbLogo} alt="TMDB logo" className="tmdb-logo" />
        </div>
      </div>
    </div>
  );
};

export default PageAbout;
