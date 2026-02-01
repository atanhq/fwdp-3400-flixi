// hero image, movie poster, info, genre tags (links to search)
// trailer

import '../styles/detailed.css';

function DetailedHero() {
  return (
    <>
    <div className="detailed-hero-container">
      <img src="https://placehold.co/600x500" className="detailed-hero-backdrop"/>
      
      <div className="poster-container">
        <img src="https://placehold.co/200x300" className="detailed-hero-poster"/>
      </div>
    </div>
    </>
  );
}

export default DetailedHero;