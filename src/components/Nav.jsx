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
import "../styles/nav.css";

const Nav = () => {
  const [searchType, searchTypeUpdate] = useState('');
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchType.trim()) {
      navigate(`/search?query=${searchType}`)
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
            <a href="/search">
              <img
                className="nav-icon-mobile"
                src={searchIcon}
                alt="search icon"
              />
            </a>
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
