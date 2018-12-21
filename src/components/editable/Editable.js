import './editable.scss';

class Editable extends Component {
  state = {
    editable: false,
    val: 'Something',

  }

  handleClick = (event) => {
    const { callback } = this.props;
    this.setState(prev => ({ editable: !prev.editable }));
    callback(event.target.value);
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
        ? <span onClick={this.handleClick}>{val}</span>
        : (
          <input
            type="text"
            autoFocus="true"
            value={val}
            onChange={this.handleChange}
            onBlur={this.handleClick}
          />
        )
    );
  }
}

export default Editable;
