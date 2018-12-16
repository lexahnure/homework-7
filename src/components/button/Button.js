import './button.scss';

class Button extends Component {
  state = {
    classN: false,
  }

  toggleClass = () => {
    const { classN } = this.state;
    this.setState(!classN ? { classN: true } : { classN: false });
  }

  render() {
    const { classN } = this.state;
    return (
      <button type="button" onClick={this.toggleClass} className={classN ? 'active' : ''}>
        Click!
      </button>
    );
  }
}
export default Button;
