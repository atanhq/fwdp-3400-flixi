import './styles/base.css';
import './styles/normalize-fwd.css';
import './styles/nav.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/home.css';
import './styles/about.css';
import './styles/detailed.css';
import './styles/favourites.css';
import './styles/search.css';
import './styles/notfound.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import PageHome from './routes/PageHome';
import PageAbout from './routes/PageAbout';
import PageDetailed from './routes/PageDetailed';
import PageFavourites from './routes/PageFavourites';
import PageSearchResult from './routes/PageSearchResult';
import PageNotFound from './routes/PageNotFound';

// import FavsProvider from '../context/FavsContext';
import { appTitle, appAuthor } from './globals/globalVariables';



// ------------------------------------------------------------------------------ //

function App() {
  return (
    <>
       <BrowserRouter>

            <div className="wrapper">

                <Header title={appTitle} />

                <Nav />

                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="/movie/:id" element={<PageDetailed />} />
                    <Route path="/favourites" element={<PageFavourites />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/search" element={<PageSearchResult />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>

                <Footer author={appAuthor} />

            </div>

        </BrowserRouter>
    </>
  );
}

export default App;
