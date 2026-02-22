import { getYear } from "../utilities/getDates";
import "../styles/footer.css";

const Footer = ({ copyright, author }) => (
  <footer>
    <p>
      &copy; {copyright} {getYear()} {author}
    </p>
  </footer>
);

Footer.defaultProps = {
  author: "Flixi",
  copyright: getYear(),
};

export default Footer;