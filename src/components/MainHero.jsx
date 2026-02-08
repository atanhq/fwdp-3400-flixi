import heroImage from '../assets/400.svg';

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
            <div className="hero-background">
              <img src={movie.image} alt={movie.title} className="hero-image" />
              
              <div className="hero-overlay">
                <h1 className="hero-title">{movie.title}</h1>
                <button className="hero-button">More</button>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainHero;