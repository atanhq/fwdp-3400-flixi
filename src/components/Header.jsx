import "../styles/header.css";
import logo from "../assets/icons/flixi-logo-cropped-nav.svg";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <header className="mobile-header">
      <Link to="/">
        <img className="header-logo" src={logo} alt={title} />
      </Link>
    </header>
  );
};

export default Header;