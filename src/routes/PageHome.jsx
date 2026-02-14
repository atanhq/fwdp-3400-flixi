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

// favourites
import isFav from '../utilities/isFav';
import { useSelector } from 'react-redux';

import "../styles/home.css";

function PageHome() {
  const [movies, setMovies] = useState([]);

  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  // Fetching Movies From API, Using useEffect so that it only runs once when page loads, and not on every re-render
  // No Filter For now, just fetching popular movies, we can add filters later

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
    
      {/* Sending the first 5 Movies to the hero carousel, we can change this later */}

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
            isFav={isFav(favs, null, movie.id)}
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
            isFav={isFav(favs, null, movie.id)}
          />
        ))}
      </div>
    </>
  );
}

export default PageHome;
