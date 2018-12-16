import Greetings from '../greetings/index';
import Numbers from '../numbers/index';
import UsersTable from '../userstable/index';
import Counter from '../counter';
import List from '../list';
import { list } from './usersList';
import Button from '../button';
import Show from '../show';
import Location from '../location';

import './content.scss';

// eslint-disable-next-line no-undef
class Content extends Component {
  state = {
    users: [],
    userPosts: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ users }));
  }

  // eslint-disable-next-line class-methods-use-this
  showUserInfo = (user) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
      .then(resp => resp.json())
      .then(posts => this.setState({ userPosts: posts }));
  }

  closeInfo = () => {
    this.setState({ userPosts: [] });
  }

  render() {
    const {
      users,
      userPosts,
    } = this.state;

    return (
      <div className="content">
        <h2> Content </h2>
        <Greetings name="Alex" />
        <Numbers from={1} to={8} even />
        <UsersTable users={list} />
        <Counter />
        <Button />
        <Show />
        <Location />
        <List items={users} clickHandler={this.showUserInfo} userData={userPosts} btnHandler={this.closeInfo} />
      </div>
    );
  }
}

export default Content;
