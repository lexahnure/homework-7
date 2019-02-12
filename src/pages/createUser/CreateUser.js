import { Redirect } from 'react-router-dom';
import Form from '../../components/form';
import { register } from '../../services';

import './createUser.scss';

class CreateUser extends Component {
  state = {
    redirect: false,
  };

  clickHandler = () => {
    this.setState({ redirect: true });
  }

  registerUser = (data) => {
    const { history } = this.props;
    register(data).then(() => history.push('/success'));
  }

  render() {
    const { redirect } = this.state;
    const { history } = this.props;
    console.log(history);

    return (
      <div className="register">
        <h2>Create User</h2>
        <Form registerUser={this.registerUser} />
        <button type="button" onClick={this.clickHandler}>
            Go to login
        </button>
        {redirect && <Redirect to="/login" />}
      </div>
    );
  }
}

export default CreateUser;
