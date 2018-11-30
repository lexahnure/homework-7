import List from '../list/index'
import './content.scss';
const Error = (props) => {
  console.log(props);
  const date = props.date ? props.date.toLocaleString() : '';
  const style = {backgroundColor: 'red', color: props.color || 'white'};

  return <mark style={style}>There is an error: {props.text} {date}</mark>
};
const items = [
  {id:1, name: 'Ilia'},
  {id:2, name: 'Petro'}
];

const Content = () => (
  <div className="content">
    <h2> Content </h2>
    <p>Lorem ipsum</p>
    <List items={items}/>
    <List/>
  </div>
);

export default Content;