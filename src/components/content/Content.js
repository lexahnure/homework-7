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
    classN: false,
    btnText: 'show',
    rectClass: 'hidden',
    userPosts: [],
    latitude: '',
    longtitude: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ users }));

    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({
        latitude: pos.coords.latitude,
        longtitude: pos.coords.longitude
      })
    });
  }

  toggleClass = () => {
    const { classN } = this.state;
    this.setState(classN ? { classN: false } : { classN: true });
  }

  toggleView = () => {
    const { rectClass } = this.state;

    this.setState(
      rectClass === 'hidden' ? {
        rectClass: 'shown',
        btnText: 'hide'
      } : {
        rectClass: 'hidden',
        btnText: 'show'
      }
    );
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
      classN,
      btnText,
      rectClass,
      userPosts,
      latitude,
      longtitude
    } = this.state;

    return (
      <div className="content">
        <h2> Content </h2>
        <Greetings name="Alex" />
        <Numbers from={1} to={8} even />
        <UsersTable users={list} />
        <Counter />
        <Button handleClick={this.toggleClass} btnClassName={classN} />
        <Show handleClick={this.toggleView} text={btnText} btnClassName={rectClass} />
        <Location latitude={latitude} longtitude={longtitude} />
        <List items={users} clickHandler={this.showUserInfo} userData={userPosts} btnHandler={this.closeInfo} />
      </div>
    );
  }
}

export default Content;
