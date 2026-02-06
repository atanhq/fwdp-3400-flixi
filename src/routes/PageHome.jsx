import MainHero from '../components/MainHero';

function PageHome() {

  const movies = [
    { id: 1, title: "Movie Title 1", image: "/images/200x300.svg" },
    { id: 2, title: "Movie Title 2", image: "/images/200x300.svg" },
    { id: 3, title: "Movie Title 3", image: "/images/200x300.svg" },
    { id: 4, title: "Movie Title 4", image: "/images/200x300.svg" },
    { id: 5, title: "Movie Title 5", image: "/images/200x300.svg" },
    { id: 6, title: "Movie Title 6", image: "/images/200x300.svg" },
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

          <div className="movies-container"> 
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
    </>
  )
}



export default PageHome