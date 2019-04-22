import './editable.scss';

class Editable extends Component {
  state = {
    editable: false,
    val: '',
  }

  // componentDidUpdate(nextProps, prevState) {
  //   if (nextProps.active) {
  //     return { editable: true }
  //   }
  //   return null;
  // }

  handleState = (event) => {
    const { callback, element } = this.props;
    this.setState(({ editable: false }));
    if (callback && event.type !== 'click') {
      callback(event.target.value);
    }
  }

  enableEdit = () => {
    this.setState(({ editable: true }));
  }

  handleChange = (event) => {
    this.setState({ val: event.target.value });
  }

  render() {
    const {
      editable,
      val,
    } = this.state;

    const {
      text,
      placeholder,
      multiline,
      active,
      clickEvent
    } = this.props;

    const isActive = () => 'active' in this.props;

    if (active || editable) {
      return (
        <input
          type="text"
          autoFocus
          value={val || text}
          onChange={this.handleChange}
          onBlur={this.handleState}
          className="editable"
        />
      );
    }

    if (!editable && isActive()) {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span
          className={val || text ? 'editable' : 'editable notEntered'}
          onClick={clickEvent}
        >
          {val || text || placeholder}
        </span>
      );
    }

    if (!editable && !isActive()) {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span
          onClick={this.enableEdit}
          className={val || text ? 'editable' : 'editable notEntered'}
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
          className="editable"
        />
      );
    }
  }
}

export default Editable;
