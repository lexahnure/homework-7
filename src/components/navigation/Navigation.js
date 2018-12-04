import './navigation.scss';

const Navigation = (props) => {
  const { list } = props;

  return (
    <nav className="navigation">
      <ul>
        {list.map(item => <li key={item}><a href={`/${item.toLowerCase()}`}>{item}</a></li>)}
      </ul>
    </nav>
  );
};

export default Navigation;
