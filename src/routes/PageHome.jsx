
import MainHero from '../components/MainHero';
import placeholderImage from '../assets/200x300.svg';

function PageHome() {

  const movies = [
    { id: 1, title: "Movie Title 1", image: placeholderImage },
    { id: 2, title: "Movie Title 2", image: placeholderImage },
    { id: 3, title: "Movie Title 3", image: placeholderImage },
    { id: 4, title: "Movie Title 4", image: placeholderImage },
    { id: 5, title: "Movie Title 5", image: placeholderImage },
    { id: 6, title: "Movie Title 6", image: placeholderImage },
  ];

  return (
    <>
      <MainHero />
      <div className="filter-container">
        <label className="filter-label">Filter:</label>
        <select className="filter-dropdown">
          <option value="popular">Popular</option>
          <option value="upcoming">Upcoming</option>
          <option value="new-release">New Release</option>
        </select>
      </div>

      {/* Mobile 3d carousel ref from codepen */}

      <div className="movies-container"> 
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>

  {/* grid for desktop and tablet */}
   <div className="movies-grid"> 
      {movies.map(movie => (
        <div key={movie.id} className="grid-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
      

    </>
  )
}



export default PageHome
