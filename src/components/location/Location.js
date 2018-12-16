import './location.scss';

class Location extends Component {
  state = {
    latitude: '',
    longitude: ''
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.setState({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      });
    });
  }

  render() {
    const {
      latitude,
      longitude
    } = this.state;

    return (
      <span className="location"><p>Your location is {latitude} : {longitude}</p></span>
    );
  }
}

export default Location;
