import { login } from '../../services';

import './login.scss';

const Login = ({ onLogin }) => {
  const onSubmit = () => {
    const { elements } = event.target;
    const data = {
      email: elements.email.value,
      password: elements.password.value,
    }

    login(data)
      .then(onLogin);

    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="login">
      <input type="text" placeholder="Enter email" required name="email" defaultValue="admin@a.com" />
      <input type="password" placeholder="Type password" required name="password" defaultValue="admin" />
      <input type="submit" value="Login" />
    </form>
  );
};
export default Login;
