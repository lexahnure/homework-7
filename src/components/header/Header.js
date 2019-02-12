import Navigation from '../navigation/index';
import { Link, NavLink } from 'react-router-dom';
import './header.scss';

const Header = ({ user, info, onLogout }) => {
  const onLogoutHandler = (event) => {
    onLogout();
  };

  return (
    <header className="header">
      <strong>
        <NavLink to="/home" activeClassName="">Logo</NavLink>
      </strong>
      <Navigation list={['Home', 'Categories', 'Products', 'Contacts']} />
      <div className="user-box">
        {
          user
            ? (
              <div>
                <NavLink to="/profile" activeClassName="">
                  <img src="/images/user.svg" alt="" />
                  <span className="user-nav">{user.firstName}</span>
                </NavLink>
                <span>{info && `(${info.categories}/${info.products})`}</span>
                <button type="button" onClick={onLogoutHandler}>Logout</button>
              </div>
            )
            : (
              <Navigation list={['Login', 'User']} />
            )
        }
      </div>
    </header>
  );
};

export default Header;
