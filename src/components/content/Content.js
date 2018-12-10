import Greetings from '../greetings/index';
import Numbers from '../numbers/index';
import UsersTable from '../userstable/index';
import Counter from '../counter';

import './content.scss';
import List from '../list';

const Error = (props) => {
  console.log(props);
  const date = props.date ? props.date.toLocaleString() : '';
  const style = {backgroundColor: 'red', color: props.color || 'white'};

  return <mark style={style}>There is an error: {props.text} {date}</mark>
};

const list = [
  { 
    firstName: 'Erik',
    lastName: 'Cartman',
    age: 12
  },
  {
    firstName: 'Kyle',
    lastName: 'Broflovsky',
    age: 12
  },
  {
    firstName: 'Stan',
    lastName: 'Marsch',
    age: 12
  },
];

class Content extends Component {
  state = { users: [] };  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ users }));
  }

  showUserInfo(user) {
    alert(user.name);
  }

  render() {
    const { users } = this.state;

    return (
      <div className="content">
        <h2> Content </h2>
        <Greetings name="Alex" />
        <Numbers from={1} to={8} even />
        <UsersTable users={list} />
        {/* <ul>
          {
            users.map(({ name, id, username }) => 
            <li key={id} onClick={() => this.showUserName(username)}>{name}</li>)
          }
        </ul> */}
        <Counter />
        <List items={users} clickHandler={this.showUserInfo} />
      </div>  
    )
  }
};

export default Content;
