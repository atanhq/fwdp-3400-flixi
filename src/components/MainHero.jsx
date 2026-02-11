// import heroImage from "../assets/400.svg";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../globals/globalVariables";

// slick carousel from https://react-slick.neostack.com/docs/get-started
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainHero({ heroMovies }) {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
            {/* grabs the hero image */}
            <img
              src={`${imageBaseUrl}w1280${movie.backdrop_path}`}
              alt={movie.title}
              className="hero-image"
            />

          {/* grabs movie title, description, more/movie id */}
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
            {/* <div className="carousel-dots">
              {heroMovies.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`dot ${dotIndex === index ? "active" : ""}`}
                ></span>
              ))}
            </div> */}
          </div>
        ))}
        </Slider>
      </div>
      
    </section>
    
  );
}

export default MainHero;
