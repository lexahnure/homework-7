import './location.scss';

const Location = ({ latitude, longtitude }) => (
  <span className="location"><p>Your location is {latitude} : {longtitude}</p></span>
);

export default Location;
