import './editable.scss';

class Editable extends Component {
  state = {
    editable: false,
    val: '',
  }

  handleState = (event) => {
    const { callback, element } = this.props;
    this.setState(prev => ({ editable: !prev.editable }));
    if (callback && event.type !== 'click') {
      element.title = event.target.value;
      callback(element);
    }
  }

  handleChange = (event) => {
    this.setState({ val: event.target.value });
  }

  renderContent() {
    const {
      editable,
      val,
    } = this.state;

    const {
      text,
      placeholder,
      multiline
    } = this.props;

    if (!editable) {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span
          onClick={this.handleState}
          className={val || text ? '' : 'notEntered'}
        >
          {val || text || placeholder}
        </span>
      );
    }

    if (editable && multiline) {
      return (
        <textarea
          wrap="soft"
          rows="4"
          autoFocus
          value={val || text}
          onChange={this.handleChange}
          onBlur={this.handleState}
        />
      );
    }

    if (editable && !multiline) {
      return (
        <input
          type="text"
          autoFocus
          value={val || text}
          onChange={this.handleChange}
          onBlur={this.handleState}
        />
      );
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Editable;
