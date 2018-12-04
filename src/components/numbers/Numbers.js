import './numbers.scss';

const Numbers = (props) => {
  const { from } = props;
  const { to } = props;
  const { even } = props;
  const arr = [];

  for (let num = from; num <= to; num++) {
    arr.push(num);
    num++;
  }

  return even
    ? <ul className="numbers">{arr.filter(item => (item % 2 === 0)).map(item => <li>{item}</li>)}</ul>
    : <ul className="numbers">{arr.filter(item => (item % 2)).map(item => <li>{item}</li>)}</ul>;
};

export default Numbers;
