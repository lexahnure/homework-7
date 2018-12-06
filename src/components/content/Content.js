import Greetings from '../greetings/index';
import Numbers from '../numbers/index';
import UsersTable from '../userstable/index';

import './content.scss';

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

const Content = () => (
  <div className="content">
    <h2> Content </h2>
    <Greetings name="Alex" />
    <Numbers from={1} to={8} even />
    <UsersTable users={list} />
  </div>
);

export default Content;
