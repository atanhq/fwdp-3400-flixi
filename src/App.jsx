

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { appTitle, appAuthor } from "./globals/globalVariables";

// components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import PageHome from "./routes/PageHome";
import PageAbout from "./routes/PageAbout";
import PageDetailed from "./routes/PageDetailed";
import PageFavourites from "./routes/PageFavourites";
import PageSearchResult from "./routes/PageSearchResult";
import PageNotFound from "./routes/PageNotFound";

// styling
import './styles/base.css';
import './styles/normalize-fwd.css';


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
