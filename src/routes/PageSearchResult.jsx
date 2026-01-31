import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageSearchResult() {

	useEffect(() => {
		document.title = `${appTitle} - Search Result`;
	}, []);

    return (
        <main>
		    <section>
                <p>search result page here</p>
            </section>
	    </main>
    );
	
}

export default PageSearchResult;