import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUserAsync } from 'store/user';
import Form from '../../components/form';

import './profile.scss';

class CreateUser extends Component {
  state = {
    redirect: false,
    userData: null,
    visible: false,
  };

  componentDidMount() {
    const { user } = this.props;
    const userData = {
      name: user.firstName,
      surname: user.lastName,
      email: user.email,
    };

    this.setState({ userData });
  }

  clickHandler = () => {
    this.setState({ redirect: true });
  }

  registerUser = (data) => {
    const { dispatch } = this.props;
    dispatch(updateUserAsync(data));
    this.setState({ visible: true });
  }

  render() {
    const { userData, visible } = this.state;
    const { history } = this.props;

    return (
      <div className="register">
        <h2>User Profile</h2>
        {
          userData && (
            <Form registerUser={this.registerUser} data={userData} disabled={{email: true}} />
          )
        }
        {
          visible && (
            <p className="info-message">Your profile have been updated!</p>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(CreateUser);
