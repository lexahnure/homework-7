import Navigation from '../navigation/index';
import './header.scss';

const Header = () => (
    <header className="header">
        <strong> <a href = "/">Logo</a> </strong>
        <Navigation/>
    </header>
);

export default Header;