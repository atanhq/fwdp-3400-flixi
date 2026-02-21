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

import noPoster from "../assets/no-poster.png";
import Loader from "../components/Loader";

function PageSearchResult() {
  // Use States and Search Params
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = `${appTitle} - Search Result`;
  }, []);

  // Fetch Search Results
  useEffect(() => {
    if (query) {
      setLoading(true);
      const fetchSearch = async () => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await fetch(
          `${apiBaseUrl}/search/movie?query=${query}&page=${page}`,
          options,
        );

        const searchData = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 300));
        setMovies(searchData.results);

        setLoading(false);
      };
      fetchSearch();
    }
  }, [query]);

  // View More Movies Api Call
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
      `${apiBaseUrl}/search/movie?query=${query}&page=${nextPage}`,
      options,
    );
    const searchData = await viewMoreResponse.json();
    setMovies([...movies, ...searchData.results]);
    setPage(nextPage);
  };

  return (
    <main>
      {loading ? (
        <Loader />
      ) : (
        <section className="search">
          <p className="search-term">
            Search result: <strong>{query}</strong>
          </p>

          <div className="search-result">
            {movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                {/* Display Movies - If movie does not have a poster_path, show noPoster image */}
                <img
                  src={
                    movie.poster_path === null
                      ? `${noPoster}`
                      : `${imageBaseUrl}w200${movie.poster_path}`
                  }
                  alt={movie.title}
                  className="search-card"
                />
              </Link>
            ))}
          </div>

          <div className="view-more">
            <button onClick={viewMoreMovies}>View More</button>
          </div>
        </section>
      )}
    </main>
  );
}

export default PageSearchResult;
