import { getYear } from '../utilities/getDates';

const Footer = ({ copyright, author }) => (
	<footer>
        <p>&copy; {copyright} {author}</p>
    </footer>
);

Footer.defaultProps = {
    author: 'Flixi',
    copyright: getYear()
}

export default Footer;