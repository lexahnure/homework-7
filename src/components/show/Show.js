import './show.scss';

class Show extends Component { 
  state = {
    btnText: 'show',
    rectClass: 'hidden',
  }

  toggleView = () => {
    const { rectClass } = this.state;

    this.setState(
      rectClass === 'hidden' ? {
        rectClass: 'shown',
        btnText: 'hide'
      } : {
        rectClass: 'hidden',
        btnText: 'show'
      }
    );
  }

  render() {
    const {
      rectClass,
      btnText
    } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleView}>{btnText}</button>
        <span className={rectClass} />
      </>
    );
  }
}

export default Show;
