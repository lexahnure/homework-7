import UserComp from '../usercomp/index';
import './userstable.scss';

const UsersTable = (props) => {
  const { users } = props;

  return (
    <table className="usersTable">
      {
        users
        ? users.map(user => <UserComp firstName={user.firstName} lastName={user.lastName} age={user.age} />)
        : <tr><td className="error">No data here</td></tr>
      }
    </table>
  )
};

export default UsersTable;
