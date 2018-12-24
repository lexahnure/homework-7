import './show.scss';

class Show extends Component { 
  state = {
    isShown: false,
  }

  toggleView = () => {
    this.setState(prev => ({ isShown: !prev.isShown }));
  }

  render() {
    const {
      isShown
    } = this.state;

    return (
      <>
        <button type="button" onClick={this.toggleView}>{isShown ? 'hide' : 'show'}</button>
        <span className={isShown ? 'shown' : 'hidden'} />
      </>
    );
  }
}

export default Show;
