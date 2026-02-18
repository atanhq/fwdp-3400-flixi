// top header for desktop; bottom nav for tablet/mobile
// includes search bar
// css, active state for search bar on click to activate

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import homeIcon from "../assets/icons/home.svg";
import searchIcon from "../assets/icons/search.svg";
import favouritedIcon from "../assets/icons/favourited.svg";
import infoIcon from "../assets/icons/info.svg";
import logo from "../assets/icons/flixi-logo-cropped-nav.svg";
import closebtn from "../assets/icons/xmark.svg";
import "../styles/nav.css";

const Nav = () => {
  const [searchType, searchTypeUpdate] = useState("");
  const navigate = useNavigate();
  const [searchOverlay, setSearchOverlay] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchType.trim()) {
      navigate(`/search?query=${searchType}`);
    }
  };

  return (
    <>
      <nav className="mobile-nav">
        <ul className="nav-ul-mobile">
          <li>
            <a href="/">
              <img className="nav-icon-mobile" src={homeIcon} alt="home icon" />
            </a>
          </li>
          <li>
            <button
              className="mobile-button "
              onClick={() => setSearchOverlay((prev) => !prev)}
            >
              <img
                className="nav-icon-mobile"
                src={searchIcon}
                alt="search icon"
              />
            </button>
          </li>
          <li>
            <a href="/favourites">
              <img
                className="nav-icon-mobile"
                src={favouritedIcon}
                alt="favourites icon"
              />
            </a>
          </li>
          <li>
            <a href="/about">
              <img
                className="nav-icon-mobile"
                src={infoIcon}
                alt="about icon"
              />
            </a>
          </li>
        </ul>
      </nav>
      {searchOverlay && (
        <>
          <div className="search-overlay">
            <form onSubmit={submitSearch} className="search-wrapper">
              <button
                className="mobile-button "
                onClick={() => setSearchOverlay(false)}
              >
                <svg
                  className="close-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search movie title..."
                className="search-input"
                value={searchType}
                onChange={(e) => searchTypeUpdate(e.target.value)}
              />
            </form>
          </div>

          <div className="overlay-background"></div>
        </>
      )}

      <nav className="desktop-nav">
        <ul className="nav-ul-desktop">
          <li>
            <a href="/">
              <img className="nav-icon-logo" src={logo} alt="flixi logo" />
            </a>
          </li>
          <li className="search-li">
            <form onSubmit={submitSearch} className="search-wrapper">
              <img className="search-icon" src={searchIcon} alt="search icon" />
              <input
                type="text"
                placeholder="Search movie title..."
                className="search-input"
                value={searchType}
                onChange={(e) => searchTypeUpdate(e.target.value)}
              />
            </form>
          </li>
          <li>
            <a href="/favourites">
              <img
                className="nav-icon-desktop"
                src={favouritedIcon}
                alt="favourites icon"
              />
            </a>
          </li>
          <li>
            <a href="/about">
              <img
                className="nav-icon-desktop"
                src={infoIcon}
                alt="about icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
