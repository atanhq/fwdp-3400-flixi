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
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("upcoming");

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  // Fetching Movies From API, Using useEffect so that it only runs once when page loads, and not on every re-render
  // No Filter For now, just fetching popular movies, we can add filters later

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/${filter}?api_key=${apiKey}`,
      );
      const data = await response.json();
      console.log(data);
      setPage(1);
      setMovies(data.results);
    };
    fetchMovies();
  }, [filter]);

  // Took this from faith's code and adjusted it to work on homepage
  const viewMoreMovies = async () => {
    const nextPage = page + 1;
    const viewMoreResponse = await fetch(
      `${apiBaseUrl}/movie/${filter}?api_key=${apiKey}&page=${nextPage}`,
    );
    if (viewMoreResponse.ok) {
      const viewData = await viewMoreResponse.json();
      setMovies([...movies, ...viewData.results]);
      setPage(nextPage);
    }
  };

  return (
    <>
      {/* Sending the first 5 Movies to the hero carousel, we can change this later */}

      <MainHero heroMovies={movies.slice(0, 5)} />
      <Filter currentFilter={filter} updateFilter={setFilter} />

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
        {/* only map movies where the poster Path exist  */}
        {movies.map(
          (movie) =>
            movie.poster_path !== null && (
              <Movie
                key={movie.id}
                movie={movie}
                cardType="grid-card"
                imageBaseUrl={imageBaseUrl}
              />
            ),
        )}
      </div>

      <div className="view-more">
        <button className="pill-button active" onClick={viewMoreMovies}>
          View More
        </button>
      </div>
    </>
  );
}

export default PageHome;
