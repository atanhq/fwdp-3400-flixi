// dropdown component for search suggestions
// will display small movie poster and title for each suggestion

import { imageBaseUrl } from "../globals/globalVariables";
import noPoster from '../assets/no-poster.png';
import happyFlixi from '../assets/icons/happyflixi.svg';



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
                <a href ={`/search?query=${searchType}`}>Browse for more "{searchType}" movies</a>
            </li>
        </ul>
    );
}

export default SearchSuggestions;