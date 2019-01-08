import './hello.scss';

class Hello extends React.PureComponent {
  render() {
    const {
      summary
    } = this.props;

    return (
      <div className="card">
        <h2>Hello, {summary.name}</h2>
        <p>You have {summary.categories} categories ({summary.published} published)</p>
        <p>You have {summary.products} products</p>
        <a href="/">Go to categories</a>
      </div>
    );
  }
}

export default Hello;
