import Navigation from '../navigation/index';
import './header.scss';

const Header = ({ user, info }) => (
  <header className="header">
    <strong>
      <a href="/">Logo</a>
    </strong>
    <Navigation list={['Home', 'Categories', 'Contacts']} />
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
                <a href="/signin">SignIn</a>
                <a href="/signup">SignUp</a>
              </span>
            )
        }
    </div>
  </header>
);

export default Header;
