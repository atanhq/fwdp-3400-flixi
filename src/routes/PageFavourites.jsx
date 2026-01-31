import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageFavourites() {

	useEffect(() => {
		document.title = `${appTitle} - Favourites`;
	}, []);

    return (
        <main>
		    <section>
                <p>favourites page here</p>
            </section>
	    </main>
    );
	
}

export default PageFavourites;