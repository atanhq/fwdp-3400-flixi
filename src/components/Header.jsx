// Header
// needed for default props. global variables on each page should override this

const Header = ({ title }) => (
    <header>
        <h1>{title}</h1>
    </header>
);

Header.defaultProps = {
    title: 'Flixi Movie App'
}

export default Header;
