import { useEffect, useState } from "react";
import { appTitle, apiKey, apiBaseUrl, imageBaseUrl } from "../globals/globalVariables";
import MainHero from "../components/MainHero";
import Filter from "../components/Filter";
import Movie from "../components/Movie";
import Loader from "../components/Loader";
import rating from "../assets/icons/rating.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import isFav from "../utilities/isFav";
import { useSelector } from "react-redux";
import "../styles/home.css";

function PageHome() {
  // States for Movies, Page, Filter, Active Movie for the mobile carousel
  // Initial Load for the loader and Hero Movies for the hero carousel
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("popular");
  const [activeMovie, setActiveMovie] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
  const [heroMovies, setHeroMovies] = useState([]);

  // favourites
  const favs = useSelector((state) => state.favs.items);

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  // Fetching Movies From API, Filter as dependency.
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      };

      const response = await fetch(`${apiBaseUrl}/movie/${filter}`, options);
      if (response.ok) {
        const data = await response.json();

        // Only Load The first 5 Movies to the hero carousel if its the inital Load
        if (initialLoad) {
          setHeroMovies(data.results.slice(0, 5));
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
        setPage(1);
        setMovies(data.results);
        setInitialLoad(false);
      }
    };
    fetchMovies();
  }, [filter]);

  const viewMoreMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    const nextPage = page + 1;
    const viewMoreResponse = await fetch(
      `${apiBaseUrl}/movie/${filter}?page=${nextPage}`,
      options,
    );
    if (viewMoreResponse.ok) {
      const viewData = await viewMoreResponse.json();
      setMovies([...movies, ...viewData.results]);
      setPage(nextPage);
    }
  };

  return (
    <>
      {initialLoad ? (
        <Loader />
      ) : (
        <div className="home-wrapper">
          <MainHero heroMovies={heroMovies} />
          <Filter currentFilter={filter} updateFilter={setFilter} />

          <div className="movies-container">
            {/* Swiper Carousel for mobile */}
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
              <span className="rating-mobile-home">
                <img src={rating} className="rating-svg" />

                {movies[activeMovie]?.vote_average?.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="movies-grid">
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
        </div>
      )}
    </>
  );
}

export default PageHome;