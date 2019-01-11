import Navigation from '../navigation/index';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = ({ user, info }) => (
  <header className="header">
    <strong>
      <NavLink to="/home" activeClassName="">Logo</NavLink>
    </strong>
    <Navigation list={['Home', 'Categories', 'Products', 'Contacts']} />
    <div className="user-box">
      {
        user
          ? (
            <span>
              {user.firstName}
              {info && `(${info.categories}/${info.products})`}
            </span>
          )
          : (
            <span>
              <Navigation list={['Login', 'User']} />
              {/* <NavLink to="/login" activeClassName="active">Login</NavLink>
              <NavLink to="/user" activeClassName="active">Register</NavLink> */}
            </span>
          )
      }
    </div>
  </header>
);

export default Header;
