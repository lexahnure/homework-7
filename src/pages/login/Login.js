import { login } from '../../services';

import './login.scss';

const Login = ({ onLogin }) => {
  const onSubmit = () => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value,
    };

    login(data)
      .then(onLogin);

    event.preventDefault();
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter email" required name="email" defaultValue="admin@a.com" />
        <input type="password" placeholder="Type password" required name="password" defaultValue="admin" />
        <input type="submit" value="Login" className="accent" />
      </form>
    </div>
  );
};

export default Login;
