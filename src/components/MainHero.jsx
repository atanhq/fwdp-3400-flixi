import heroImage from "../assets/400.svg";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../globals/globalVariables";
function MainHero({ heroMovies }) {
  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {heroMovies.map((movie, index) => (
          <div
            key={movie.id}
            className={`hero-slide ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`${imageBaseUrl}w1280${movie.backdrop_path}`}
              alt={movie.title}
              className="hero-image"
            />

            <div className="hero-wrapper">
              <div className="hero-title-background">
                <h1 className="hero-title">{movie.title}</h1>
                <p className="hero-description">
                  {movie.overview.length > 150
                    ? movie.overview.slice(0, 150) + "..."
                    : movie.overview}
                </p>
                <Link to={`/movie/${movie.id}`} className="hero-button">
                  More
                </Link>
              </div>
            </div>
            <div className="carousel-dots">
              {heroMovies.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`dot ${dotIndex === index ? "active" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainHero;
