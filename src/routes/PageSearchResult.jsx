import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  appTitle,
  apiKey,
  apiBaseUrl,
  imageBaseUrl,
} from "../globals/globalVariables";
import "../styles/base.css";
import "../styles/search.css";

import noPoster from '../assets/no-poster.png';
import Movie from '../components/Movie';

function PageSearchResult() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `${appTitle} - Search Result`;
  }, []);

  useEffect(() => {
    if (query) {
      const fetchSearch = async () => {
        const response = await fetch(
          `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${page}`,
        );
        const searchData = await response.json();
        setMovies(searchData.results);
      };
      fetchSearch();
    }
  }, [query]);

  const viewMoreMovies = async () => {
    const nextPage = page + 1;
    const viewMoreResponse = await fetch(
      `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${query}&page=${nextPage}`,
    );
    const searchData = await viewMoreResponse.json();
    setMovies([...movies, ...searchData.results]);
    setPage(nextPage);
  };

  return (
    <main>
      <section class="search">
        <p className="search-term">
          Search result: <strong>{query}</strong>
        </p>

                <div className="search-result">

          {movies.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <img
                src={movie.poster_path === null ?
                            `${noPoster}`
                            :
                            `${imageBaseUrl}w200${movie.poster_path}`}
                alt={movie.title}
                className="search-card"
              />
            </Link>
          ))}
                    
        </div>

        <div className="view-more">
          <a onClick={viewMoreMovies}>View More</a>
        </div>
      </section>
    </main>
  );
}

export default PageSearchResult;
