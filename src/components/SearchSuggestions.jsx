// dropdown component for search suggestions
// will display small movie poster and title for each suggestion

import { imageBaseUrl } from "../globals/globalVariables";
import noPoster from '../assets/no-poster.png';



function SearchSuggestions({ suggestions, handleSuggestionClick }) {

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
        </ul>
    );
}

export default SearchSuggestions;