import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageHome() {

	useEffect(() => {
		document.title = `${appTitle} - Home`;
	}, []);

    return (
        <main>
		    <section>
                <p>home page here</p>
            </section>
	    </main>
    );
	
}

export default PageHome;
