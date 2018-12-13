import './list.scss';

const List = ({ items, clickHandler, userData, btnHandler }) => (

  items ? (
    <div className="userInfo">
      <ul className="usersList">
        {
          items.map(el => <li key={el.id} onClick={() => clickHandler(el)}>{el.name}</li>)
        }
      </ul>
      {
        userData.length !== 0
          ? (
            <div className={userData.length !== 0 ? 'userPosts' : ''}>
              <h2>Posts</h2>
              {userData.length !== 0 ? userData.map(el => <><h4>{el.title}</h4><p>{el.body}</p></>) : null}
              <button type="button" onClick={btnHandler}>Close</button>
            </div>
          )
          : null
      }
    </div>
  ) : null
);

export default List;
