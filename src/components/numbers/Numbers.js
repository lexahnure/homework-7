import './numbers.scss';

const Numbers = (props) => {
  const { from, to, even, odd } = props;
  const arr = [];
  const output = item => <li>{item}</li>;
  let numSort;

  for (let num = from; num <= to; num++) {
    arr.push(num);
  }

  if (even) {
    numSort = arr.filter(item => (item % 2 === 0)).map(output);
  }
  if (odd) {
    numSort = arr.filter(item => (item % 2)).map(output);
  }
  if (!even && !odd) {
    numSort = arr.map(output);
  }


  return <ul className="numbers">{numSort}</ul>;
};

export default Numbers;