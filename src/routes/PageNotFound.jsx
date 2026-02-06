import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageNotFound() {

	useEffect(() => {
		document.title = `${appTitle} - 404 Not Found`;
	}, []);

    return (
        <main>
		    <section>
                <p>not found page here</p>
            </section>
	    </main>
    );
	
}

export default PageNotFound;
