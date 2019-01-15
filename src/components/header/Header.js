import Navigation from '../navigation/index';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../services';
import './header.scss';

const Header = ({ user, info, onLogout, history }) => {
  const onLogoutHandler = (event) => {
    event.preventDefault();
    logout().then(() => {
      onLogout();
      history.push('/home');
    });
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
                <span>{user.firstName}</span>
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
