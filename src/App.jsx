import './styles/styles.css'
import './styles/normalize-fwd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Nav from '../components/Nav';
import Header from '../components/Header'

// pages
import PageHome from '../routes/PageHome';
import PageAbout from '../routes/PageAbout'
import PageDetailed from '../routes/PageDetailed'
import PageFavourites from '../routes/PageFavourites'
import PageNotFound from '../routes/PageNotFound';

// import FavsProvider from '../context/FavsContext';
import { appTitle } from '../globals/globalVariables'


// ------------------------------------------------------------------------------ //


function App() {

  return (
    <>
      <h1>H1 Heading</h1>
      <h2>H2 Heading</h2>
      <p>Paragraph Text</p>



       <BrowserRouter>
            <FavsProvider>
            <div className="wrapper">
                <Header title={appTitle} />
                <Nav />
                <Routes>
                    <Route path="/" exact element={<PageHome />} />
                    <Route path="/movie/:id" element={<PageDetailed />} />
                    <Route path="/favourites" element={<PageFavourites />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
            </FavsProvider>
        </BrowserRouter>
    </>
  )
}

export default App