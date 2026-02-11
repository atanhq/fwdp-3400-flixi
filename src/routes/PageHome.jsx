import { useEffect, useState } from "react";
import {
  appTitle,
  apiKey,
  apiBaseUrl,
  imageBaseUrl,
} from "../globals/globalVariables";
import MainHero from "../components/MainHero";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
// import placeholderImage from "../assets/200x300.svg";

import "../styles/home.css";

function PageHome() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/popular?api_key=${apiKey}`,
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <MainHero heroMovies={movies.slice(0, 5)} />
      <Filter />

      {/* Mobile 3d carousel ref from codepen */}

      <div className="movies-container">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            cardType="movie-card"
            imageBaseUrl={imageBaseUrl}
          />
        ))}
      </div>

      {/* grid for desktop and tablet */}
      <div className="movies-grid">
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            cardType="grid-card"
            imageBaseUrl={imageBaseUrl}
          />
        ))}
      </div>
    </>
  );
}

export default PageHome;
