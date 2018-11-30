const List = (props) => (
  props.items ?
  <ul>
    {
      props.items && props.items.map(el => <li key={el.id}>{el.name}</li>)
    }
  </ul> : null
)

export default List;