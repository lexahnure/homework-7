import UserComp from '../usercomp/index';
import './userstable.scss';

const UsersTable = (props) => {
  const { users } = props;

  return (
    <table className="usersTable">
      <tbody>
        {
          users
          ? users.map(user => <UserComp key={user.id} firstName={user.firstName} lastName={user.lastName} age={user.age} />)
          : <tr><td className="error">No data here</td></tr>
        }
      </tbody>
    </table>
  )
};

export default UsersTable;
