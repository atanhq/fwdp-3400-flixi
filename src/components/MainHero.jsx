import heroImage from '../assets/400.svg';
import { Link } from "react-router-dom";

function MainHero() {
  const heroMovies = [
    { id: 1, title: "Movie Title 1", image: heroImage },
    { id: 2, title: "Movie Title 2", image: heroImage },
    { id: 3, title: "Movie Title 3", image: heroImage },
    { id: 4, title: "Movie Title 4", image: heroImage },
    { id: 5, title: "Movie Title 5", image: heroImage },
  ];

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {heroMovies.map((movie, index) => (
          <div key={movie.id} className={`hero-slide ${index === 0 ? 'active' : ''}`}>
              <img src={movie.image} alt={movie.title} className="hero-image" />

               <div className="hero-wrapper">
              <div className="hero-title-background">
                <h1 className="hero-title">{movie.title}</h1>
                <p className="hero-description">Short movie description! This is a cool Movie!</p>
                <Link to={`/movie/${movie.id}`} className="hero-button">More</Link>
              </div>
            </div>
               <div className="carousel-dots">
                {heroMovies.map((_, dotIndex) => (
                  <span 
                    key={dotIndex} 
                    className={`dot ${dotIndex === index ? 'active' : ''}`}
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