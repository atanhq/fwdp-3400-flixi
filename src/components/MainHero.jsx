import { Link } from "react-router-dom";
import { imageBaseUrl } from "../globals/globalVariables";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainHero({ heroMovies }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
  };

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <Slider {...settings}>
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

                  <div className="hero-button-wrapper">
                    <Link to={`/movie/${movie.id}`} className="hero-button">
                      More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MainHero;