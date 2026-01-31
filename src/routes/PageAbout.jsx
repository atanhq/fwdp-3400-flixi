import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageAbout() {

	useEffect(() => {
		document.title = `${appTitle} - About`;
	}, []);

    return (
        <main>
		    <section>
                <p>about page here</p>
            </section>
	    </main>
    );
	
}

export default PageAbout;