import "./styles/base.css";
import "./styles/normalize-fwd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages

// import FavsProvider from '../context/FavsContext';
import { appTitle } from "./globals/globalVariables";

// ------------------------------------------------------------------------------ //

function App() {
  return (
    <>
      {/* <h1>H1 Heading</h1>
      <h2>H2 Heading</h2>
      <p>Paragraph Text</p> */}

      <BrowserRouter>
        <div className="wrapper">
          <Nav />
          {/* <Routes>
            <Route path="/" exact element={<PageHome />} />
            <Route path="/movie/:id" element={<PageDetailed />} />
            <Route path="/favourites" element={<PageFavourites />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/search?query=" element={<PageSearchResult />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
