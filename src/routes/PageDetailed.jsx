import DetailedHero from "../components/DetailedHero";

import "../styles/detailed.css";
import "../styles/base.css";

import rating from "../assets/rating.svg";
// import play from "../assets/play.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  appTitle,
  apiKey,
  apiBaseUrl,
  // imageBaseUrl,
} from "../globals/globalVariables";
import Movie from "../components/Movie";

function PageDetailed() {

// FOR FETCHING MOVIE DATA
  const [movie, setMovie] = useState([]);
  // useParams Lets us grab the id from the url, which we set to the specific movie link in the Movie component, we can then use this id to fetch the specific movie data from the API and display it on the page
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    document.title = `${appTitle} - Movie`;
  }, []);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`,
      );
      let data = await response.json();
      console.log(data);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);



//----------------------------------------------//


  
   // TRAILER MOVIE ID AND YOUTUBE TRAILER DATA//
  const { trailerID } = useParams();
  const [trailer, setTrailer] = useState(null);


	useEffect(() => {
		document.title = `${appTitle} - Movie`;
	}, []);

    //TRAILER FETCH//
  useEffect(() => {
    if (trailerID) {
      const fetchTrailer = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/${trailerID}/videos?api_key=${apiKey}`
      );
      const trailerData = await response.json();
      const youtubeTrailer = trailerData.results.find(
        video => video.type === 'Trailer' && video.site 
        === 'YouTube'
      );
      setTrailer(youtubeTrailer);

    };
    fetchTrailer();
  }
}, [trailerID]);


    //----------------------------------------------//

    

    return (
    <main>
      <>
        <section className="detailed-hero">
          <DetailedHero movie={movie} />
        </section>

        <div className="wrapper">
          <section className="detailed-info">
            <h1>{movie.title}</h1>

            <div className="rating-date">
              <img src={rating} className="rating-svg" />
              <span className="rating">NR</span>
              &bull;
              <span className="date">{movie.release_date}</span>
            </div>

            <p className="summary">{movie.overview}</p>

            <div className="genre-tags">
              {movie.genres && movie.genres.map((genre) => <a>{genre.name}</a>)}
            </div>
          </section>


            {/* ------------------- TRAILER ------------------- */}
		    <section className="detailed-trailer">
                <h2>Trailer</h2>
                {trailer ? (
                <div className="play-trailer-container">

                   {/* iframe resource: 
                   https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe
                   */}
                  <iframe 
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="Movie Trailer"
                  allow= "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className ="trailer"
                  ></iframe>

                  
                    
                    {/*<img src="https://placehold.co/600x300" className="trailer"/>

                    <div className="play-svg-container">
                        <img src={play} className="play-svg"/>
                    </div>*/}
                </div>
                ) : (

                  <p>No Trailer available</p>
                )}
            </section>
        </div>
      </>
    </main>
  );
}

export default PageDetailed;
