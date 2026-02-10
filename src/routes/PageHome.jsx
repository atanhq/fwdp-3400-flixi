import {useEffect} from 'react';
import {appTitle} from '../globals/globalVariables';
import MainHero from '../components/MainHero';
import Filter from '../components/Filter';
import Movie from '../components/Movie';
import placeholderImage from '../assets/200x300.svg';

function PageHome() {


	useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

  const movies = [
    { id: 1, title: "Movie Title 1", image: placeholderImage },
    { id: 2, title: "Movie Title 2", image: placeholderImage },
    { id: 3, title: "Movie Title 3", image: placeholderImage },
    { id: 4, title: "Movie Title 4", image: placeholderImage },
    { id: 5, title: "Movie Title 5", image: placeholderImage },
    { id: 6, title: "Movie Title 6", image: placeholderImage },
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
      <Filter />
 

      {/* Mobile 3d carousel ref from codepen */}

      <div className="movies-container"> 
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} cardType="movie-card" />
      ))}
    </div>

  {/* grid for desktop and tablet */}
    <div className="movies-grid"> 
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} cardType="grid-card" />
      ))}
    </div>
      

    </>
  )
}



export default PageHome
