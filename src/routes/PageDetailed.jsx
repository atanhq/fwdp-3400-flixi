import { useEffect } from 'react';
import { appTitle } from '../globals/globalVariables';

import DetailedHero from '../components/DetailedHero';

import '../styles/detailed.css';
import '../styles/base.css';

import rating from '../assets/rating.svg';
import play from '../assets/play.svg';

function PageDetailed() {

	useEffect(() => {
		document.title = `${appTitle} - Movie`;
	}, []);

    return (
        <main>
            {/* ----------------- HERO / POSTER ----------------- */}
            <section className="detailed-hero">
                <DetailedHero />
            </section>

        <div className="wrapper">
            {/* ----------------- MOVIE INFO ----------------- */}
		    <section className="detailed-info">

                <h1>Movie Title Here</h1>

                <div className="rating-date">
                    <img src={rating} className="rating-svg"/>
                    <span className="rating">NR</span> 
                    &bull;
                    <span className="date">April 01, 2026</span>
                </div>

                <p className="summary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste nihil, perspiciatis nostrum, neque veniam, odit officia natus pariatur culpa autem ipsum impedit sint maiores quibusdam quae? Qui libero itaque nihil animi amet dolore natus! Quidem odit iste eius quia assumenda autem officiis nobis, perspiciatis eos architecto? Accusantium, cumque molestiae.</p>

                <div className="genre-tags">
                    <a href="">Psychological</a>
                    <a href="">Action</a>
                    <a href="">Thriller</a>
                    <a href="">Adventure</a>
                    <a href="">Epic</a>
                    <a href="">Horror</a>
                </div>

            </section>

		    <section className="detailed-trailer">
                <h2>Trailer</h2>
                <div className="play-trailer-container">
                    
                    <img src="https://placehold.co/600x300" className="trailer"/>

                    <div className="play-svg-container">
                        <img src={play} className="play-svg"/>
                    </div>
                </div>
            </section>
        </div>

	    </main>
    );
	
}

export default PageDetailed;