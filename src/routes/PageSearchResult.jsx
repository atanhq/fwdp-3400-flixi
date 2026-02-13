import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { appTitle, apiKey, apiBaseUrl, imageBaseUrl } from '../globals/globalVariables';
import '../styles/base.css';
import '../styles/search.css';

function PageSearchResult() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [movies, setMovies] = useState([]);


	useEffect(() => {
		document.title = `${appTitle} - Search Result`;
	}, []);

    useEffect(() => {
        if (query) {
            const fetchSearch = async () => {
                const response = await fetch (
                    `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${query}`
                );
                const searchData = await response.json();
                setMovies(searchData.results);
            };
            fetchSearch();
        }
    }, [query]);

    return (
        <main>
		    <section class="search">
                <p class="search-term">Search result: <strong>Result</strong></p>

                <div className="search-result">
                {/* to be replaced with API */}
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                    <img src="https://placehold.co/200x300" className="search-card"/>
                </div>

                <div className="view-more">
                    <a href="">View More</a>
                </div>
            </section>
	    </main>
    );
	
}

export default PageSearchResult;
