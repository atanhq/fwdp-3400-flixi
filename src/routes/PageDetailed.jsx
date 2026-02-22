import DetailedHero from "../components/DetailedHero";
import "../styles/detailed.css";
import rating from "../assets/icons/rating.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { appTitle, apiKey, apiBaseUrl } from "../globals/globalVariables";
import { useDispatch, useSelector } from "react-redux";
import FavHeart from "../components/FavHeart";
import { addFav, deleteFav } from "../features/favsSlice";
import isFav from "../utilities/isFav";

function PageDetailed() {
  useEffect(() => {
    document.title = `${appTitle} - Movie Details`;
  }, []);

  // fetching movie data
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const { id } = useParams();

  // favourites
  const dispatch = useDispatch();

  function handleFavClick(addToFav, obj) {
    if (addToFav === true) {
      dispatch(addFav(obj));
    } else {
      dispatch(deleteFav(obj));
    }
  }

  const favs = useSelector((state) => state.favs.items);
  const isFaved = movie ? isFav(favs, null, movie.id) : <p>Movie not found.</p>;

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };

      const response = await fetch(
        `${apiBaseUrl}/movie/${id}?append_to_response=videos`,
        options,
      );
      if (response.ok) {
        let data = await response.json();
        const youtubeTrailer = data.videos?.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube",
        );
        setMovie(data);
        setTrailer(youtubeTrailer);
      } else {
        console.error("Failed to fetch movie data.");
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <main>
      <>
        <section className="detailed-hero">
          <DetailedHero movie={movie} />
        </section>

        <section className="detailed-info">
          {movie ? (
            <>
              <div className="title-heart">
                <div className="movie-title">
                  <h1>{movie.title}</h1>
                </div>

                <div className="favourite-button-wrapper-desktop">
                  {isFaved ? (
                    <FavHeart
                      movie={movie}
                      remove={true}
                      handleFavClick={handleFavClick}
                    />
                  ) : (
                    <FavHeart
                      movie={movie}
                      remove={false}
                      handleFavClick={handleFavClick}
                    />
                  )}
                </div>
              </div>

              <div className="rating-date">
                <img src={rating} className="rating-svg" />
                <span className="rating">
                  {movie.vote_average?.toFixed(1)}
                </span>

                &bull;

                <span className="date">
                  {movie.release_date}
                </span>

                <div className="favourite-button-wrapper-mobile">
                  {isFaved ? (
                    <FavHeart
                      movie={movie}
                      remove={true}
                      handleFavClick={handleFavClick}
                    />
                  ) : (
                    <FavHeart
                      movie={movie}
                      remove={false}
                      handleFavClick={handleFavClick}
                    />
                  )}
                </div>
              </div>

              <div className="summary">
                {movie.overview}
              </div>

              <div className="genre-tags">
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <a key={genre.id}>{genre.name}</a>
                  ))}
              </div>
            </>
          ) : (
            <p>Movie not found.</p>
          )}
        </section>

        <section className="detailed-trailer">
          <h2>Trailer</h2>
          {trailer ? (
            <div className="play-trailer-container">
              <iframe
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="trailer"
              ></iframe>
            </div>
          ) : (
            <p>No Trailer available.</p>
          )}
        </section>
      </>
    </main>
  );
}

export default PageDetailed;