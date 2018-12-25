import './editable.scss';

class Editable extends Component {
  state = {
    editable: false,
    val: 'Something',

  }

  handleState = (event) => {
    const { callback } = this.props;
    this.setState(prev => ({ editable: !prev.editable }));
    if (callback && event.type !== 'click') {
      callback(event.target.value);
    }
  }

  handleChange = (event) => {
    this.setState({ val: event.target.value });
  }

  render() {
    const {
      editable,
      val,
    } = this.state;
    return (
      !editable
        ? <span onClick={this.handleState}>{val}</span>
        : (
          <input
            type="text"
            autoFocus
            value={val}
            onChange={this.handleChange}
            onBlur={this.handleState}
          />
        )
    );
  }
}

export default Editable;
