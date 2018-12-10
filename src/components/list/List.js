import './list.scss';

const List = ({ items, clickHandler }) => (
    items ? (
      <ul className="usersList">
        {
          items.map(el => <li key={el.id} onClick={() => clickHandler(el)}>{el.name}</li>)
        }
      </ul>
    ) : null
  );
  
  export default List;