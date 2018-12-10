import './counter.scss';

class Counter extends Component {
  state = { counter: 0 };

  clickHandler = () => {
    // const { counter } = this.state;

    this.setState((state, props) => {
      return { counter: state.counter + 1 };
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div className="counter">
        <button onClick={this.clickHandler}>Click me</button>
        <span>{counter}</span>
      </div>
    )
  }
}

export default Counter;
