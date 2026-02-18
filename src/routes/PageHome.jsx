import { useEffect, useState } from "react";
import {
  appTitle,
  apiKey,
  apiBaseUrl,
  imageBaseUrl,
} from "../globals/globalVariables";
import MainHero from "../components/MainHero";
import Filter from "../components/Filter";
import Movie from "../components/Movie";

import rating from "../assets/rating.svg";

// Swiper from https://swiperjs.com/react for the mobile movie carousel
// to install run  "npm i swiper"

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

// favourites
import isFav from "../utilities/isFav";
import { useSelector } from "react-redux";

import "../styles/home.css";

function PageHome() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("upcoming");
  const [activeMovie, setActiveMovie] = useState(null);

  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  // Fetching Movies From API, Using useEffect so that it only runs once when page loads, and not on every re-render
  // No Filter For now, just fetching popular movies, we can add filters later

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `${apiBaseUrl}/movie/${filter}?api_key=${apiKey}`,
      );
      const data = await response.json();
      console.log(data);
      setPage(1);
      setMovies(data.results);
    };
    fetchMovies();
  }, [filter]);

  // Took this from faith's code and adjusted it to work on homepage
  const viewMoreMovies = async () => {
    const nextPage = page + 1;
    const viewMoreResponse = await fetch(
      `${apiBaseUrl}/movie/${filter}?api_key=${apiKey}&page=${nextPage}`,
    );
    if (viewMoreResponse.ok) {
      const viewData = await viewMoreResponse.json();
      setMovies([...movies, ...viewData.results]);
      setPage(nextPage);
    }
  };

  return (
    <>
      {/* Sending the first 5 Movies to the hero carousel, we can change this later */}

      <MainHero heroMovies={movies.slice(0, 5)} />
      <Filter currentFilter={filter} updateFilter={setFilter} />

      {/* Mobile 3d carousel ref from codepen */}

      <div className="movies-container">
        {/* Finding the index of the current active movie https://codefinity.com/courses/v2/f4b09f6a-1d4e-4891-820c-4a9a0104bd47/1b804062-ecd4-4fbb-8bb9-02524bdc8f6f/7e2fc193-5bca-478f-9c75-4d98d00dc821 */}
        {movies.length > 0 && (
          <Swiper
            onSlideChange={(swiper) => setActiveMovie(swiper.realIndex)}
            slidesPerView={3}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={-50}
            loop={true}
            modules={[EffectCoverflow]}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1.5,
              slideShadows: false,
            }}
            className="movies-swiper"
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Movie
                  key={movie.id}
                  movie={movie}
                  cardType="movie-card"
                  imageBaseUrl={imageBaseUrl}
                  isFav={isFav(favs, null, movie.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        <div className="movie-title-mobile">
          <h3>{movies[activeMovie]?.title}</h3>
          <div className="rating-wrapper">
            <img src={rating} className="rating-svg" />
            <span className="rating">
              {movies[activeMovie]?.vote_average?.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* grid for desktop and tablet */}
      <div className="movies-grid">
        {/* only map movies where the poster Path exist  */}

        {movies.map(
          (movie) =>
            movie.poster_path !== null && (
              <Movie
                key={movie.id}
                movie={movie}
                cardType="grid-card"
                imageBaseUrl={imageBaseUrl}
                isFav={isFav(favs, null, movie.id)}
              />
            ),
        )}
      </div>
      <div className="view-more">
        <button className="pill-button active" onClick={viewMoreMovies}>
          View More
        </button>
      </div>
    </>
  );
}

export default PageHome;
