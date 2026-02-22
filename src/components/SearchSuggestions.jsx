import { imageBaseUrl } from "../globals/globalVariables";
import noPoster from "../assets/no-poster.png";
import happyFlixi from "../assets/icons/happyflixi.svg";
import { Link } from "react-router-dom";

function SearchSuggestions({ suggestions, handleSuggestionClick, searchType }) {

    return (
        <ul className="suggestions-dropdown">
            {suggestions.map((movie) => (
                <li key={movie.id} className="suggestion-item" onClick={() => handleSuggestionClick(movie)}>
                    <img
                    src={movie.poster_path === null ? noPoster : `${imageBaseUrl}w92${movie.poster_path}`}
                    alt={movie.title} />
                    <p>{movie.title}</p>
                </li>
            ))}
            
            <li className ="browse-more">
                <img src={happyFlixi} alt="happy flixi robot" className="browse-more-icon" />
                <Link to={`/search?query=${searchType}`}>Browse for more "{searchType}" movies</Link>
            </li>
        </ul>
    );
}

export default SearchSuggestions;