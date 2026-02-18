import DetailedHero from "../components/DetailedHero";

import "../styles/detailed.css";
import "../styles/base.css";
import "../styles/favourites.css";

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

// favourites
import { useDispatch, useSelector } from 'react-redux';
import FavHeart from "../components/FavHeart";
import { addFav, deleteFav } from '../features/favsSlice';
import isFav from '../utilities/isFav';


function PageDetailed() {
  // FOR FETCHING MOVIE DATA
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  // useParams Lets us grab the id from the url, which we set to the specific movie link in the Movie component, we can then use this id to fetch the specific movie data from the API and display it on the page
  const { id } = useParams();

  // ------- favourites -------
  const dispatch = useDispatch();

    function handleFavClick(addToFav, obj){
        if(addToFav === true){
            dispatch(addFav(obj));
            console.log("added!");
        }else{
            dispatch(deleteFav(obj));
            console.log("deleted!");
        }
    }

  const favs = useSelector((state) => state.favs.items);

  // equivalent to PageHome's isFav={isFav(favs, null, movie.id)
  // checks for movie 
  const isFaved = movie ? isFav(favs, null, movie.id) : <p>Movie not found</p>;

  // ------- end favourites -------

  console.log(id);

  useEffect(() => {
    document.title = `${appTitle} - Movie`;
  }, []);

  // Appending the videos to response so we can condense the call into one fetch instead of 2 https://ileolami.mintlify.app/parameters/append-response
  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/${id}?api_key=${apiKey}&append_to_response=videos`,
      );
      if (response.ok) {
        let data = await response.json();
        const youtubeTrailer = data.videos?.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        );
        setMovie(data);
        setTrailer(youtubeTrailer);
      } else {
        console.error("Failed to fetch movie data");
      }
    };
    fetchMovie();
  }, [id]);

  //----------------------------------------------//


  return (
    <main>
      <>
        <section className="detailed-hero">
          <DetailedHero movie={movie} />
        </section>

        <div className="wrapper">
          <section className="detailed-info">
            {movie ? (
              <>
                <div className="title-heart">
                  <div><h1>{movie.title}</h1></div>
              
                  <div className="favourite-button-wrapper">
                    {isFaved ?
                          <FavHeart movie={movie} 
                                    remove={true}
                                    handleFavClick={handleFavClick}  /> 
                          :
                          <FavHeart movie={movie}
                                    remove={false}
                                    handleFavClick={handleFavClick}  />
                      }
                    </div>
                  </div>

                <div className="rating-date">
                  <img src={rating} className="rating-svg" />
                  <span className="rating">
                    {movie.vote_average?.toFixed(2)}
                  </span>
                  &bull;
                  <span className="date">{movie.release_date}</span>
                </div>

                <p className="summary">{movie.overview}</p>

                <div className="genre-tags">
                  {movie.genres &&
                    movie.genres.map((genre) => (
                      <a key={genre.id}>{genre.name}</a>
                    ))}
                </div>
              </>
            ) : (
              <p>Movie not found</p>
            )}
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="trailer"
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
