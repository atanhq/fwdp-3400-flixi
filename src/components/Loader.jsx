import "../styles/Loader.css";
import flixiIcon from "../assets/icons/happyflixi.svg";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img src={flixiIcon} alt="Flixi Logo" className="flixi-loader-icon" />
      </div>
    </div>
  );
};

export default Loader;