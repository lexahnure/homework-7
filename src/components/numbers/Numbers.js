import './numbers.scss';

const Numbers = (props) => {
  const { from, to, even } = props;
  const arr = [];

  for (let num = +from; num <= +to; num++) {
    arr.push(num);
    num++;
  }

  return (
    <ul className="numbers">
      {
        even
        ? arr.filter(item => (item % 2 === 0)).map(item => <li>{item}</li>)
        : arr.filter(item => (item % 2)).map(item => <li>{item}</li>)
      }
    </ul>
  )
};

export default Numbers;