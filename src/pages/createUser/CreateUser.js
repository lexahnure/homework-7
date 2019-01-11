import { Redirect } from 'react-router-dom';
import Form from '../../components/form';

import './createUser.scss';

class CreateUser extends Component {
  state = {
    redirect: false
  };

  clickHandler = () => {
    //this.setState({ redirect: true });
    this.props.history.push('./login');
  }

  render() {
    //const { redirect } = this.state;
    return (
      <div className="register">
        <h2>Create User</h2>
        <Form />
        <button type="button" onClick={this.clickHandler} >
            Go to login
        </button>
        {/*redirect && <Redirect to="/login" />*/}
      </div>
    );
  }
}

export default CreateUser;
