// hero image carousel, the movie info
// hero image carousel, the movie info

function MainHero() {
  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        <div className="hero-slide active">
          <div className="hero-background" style={{backgroundImage: 'url(/images/400.svg)'}}>
            <div className="hero-overlay">
              <h1 className="hero-title">Movie Title 1</h1>
              <button className="hero-button">More</button>
            </div>
            

            <div className="carousel-dots"> 
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div className="hero-slide">
          <div className="hero-background" style={{backgroundImage: 'url(/images/400.svg)'}}>
            <div className="hero-overlay">
              <h1 className="hero-title">Movie Title 2</h1>
              <button className="hero-button">More</button>
            </div>
            

            <div className="carousel-dots">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>


        <div className="hero-slide">
          <div className="hero-background" style={{backgroundImage: 'url(/images/400.svg)'}}>
            <div className="hero-overlay">
              <h1 className="hero-title">Movie Title 3</h1>
              <button className="hero-button">More</button>
            </div>
            

            <div className="carousel-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>


        <div className="hero-slide">
          <div className="hero-background" style={{backgroundImage: 'url(/images/400.svg)'}}>
            <div className="hero-overlay">
              <h1 className="hero-title">Movie Title 4</h1>
              <button className="hero-button">More</button>
            </div>
            
 
            <div className="carousel-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div className="hero-slide">
          <div className="hero-background" style={{backgroundImage: 'url(/images/400.svg)'}}>
            <div className="hero-overlay">
              <h1 className="hero-title">Movie Title 5</h1>
              <button className="hero-button">More</button>
            </div>
            
  
            <div className="carousel-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot active"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainHero
