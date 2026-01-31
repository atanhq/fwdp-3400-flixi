import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

function PageDetailed() {

	useEffect(() => {
		document.title = `${appTitle} - Movie`;
	}, []);

    return (
        <main>
		    <section>
                <p>detailed movie page here</p>
            </section>
	    </main>
    );
	
}

export default PageDetailed;