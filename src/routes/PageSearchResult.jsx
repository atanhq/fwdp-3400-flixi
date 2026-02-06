import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

import '../styles/base.css';
import '../styles/search.css';

function PageSearchResult() {

	useEffect(() => {
		document.title = `${appTitle} - Search Result`;
	}, []);

    return (
        <main>
		    <section class="search">
                <h1>Search result: <strong>Result</strong></h1>

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
