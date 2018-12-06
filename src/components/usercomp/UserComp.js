import './usercomp.scss';

const UserComp = (props) => {
  const { firstName, lastName, age } = props;

  return <tr><td>{firstName} {lastName}</td><td>{age} y.o.</td></tr>;
};

export default UserComp;
