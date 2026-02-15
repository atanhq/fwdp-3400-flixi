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
        <Swiper
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
              <h3 className="movie-title-mobile">{movie.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
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
    </>
  );
}

export default PageHome;
