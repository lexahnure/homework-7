import './greetings.scss';

const Greetings = (props) => {
  const { name } = props;
  let dayPart, time;

  time = new Date().getHours();

  if (time > 22 || time <= 3) {
    dayPart = 'night';
  }
  if (time > 3 && time <= 12) {
    dayPart = 'morning';
  }
  if (time > 12 && time <= 18) {
    dayPart = 'afternoon';
  }
  if (time > 18 && time <= 22) {
    dayPart = 'evening';
  }

  return name ? <p>Good {dayPart}, {name}!</p> : <p>Good {dayPart}!</p>;
};

export default Greetings;
