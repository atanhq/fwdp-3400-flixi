import { useEffect } from "react";
import { appTitle } from "../globals/globalVariables";
import "../styles/notfound.css";
import sadFlixi from "../assets/icons/sad-flixi.svg";

function PageNotFound() {
  useEffect(() => {
    document.title = `${appTitle} - 404 Not Found`;
  }, []);

  return (
    <main>
      <section className="page-not-found-wrapper">
        <img src={sadFlixi} alt="Sad Flixi" className="sad-flixi" />
        <h1>404</h1>
        <p>The server cannot find the requested webpage</p>
        <a href="/">Go back to homepage</a>
      </section>
    </main>
  );
}

export default PageNotFound;