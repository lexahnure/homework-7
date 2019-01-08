import Editable from '../editable';
import './products.scss';

class Products extends Component {
  state = {
    products: [],
    originProds: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items !== prevState.originProds) {
      return { originProds: nextProps.items, products: nextProps.items };
    }
    return null;
  }

  changeHandler = (event) => {
    const { originProds } = this.state;
    this.setState({ products: originProds.filter((el) => {
      if (event.target.value.length > 1) {
        return el.title.toLowerCase().includes(event.target.value.toLowerCase());
      }
      return { products: originProds };
    })
    });
  }

  render() {
    const {
      products
    } = this.state;

    const {
      updProdName,
      delProd
    } = this.props;

    return (
      <div className="card">
        <h2>
          Products
        </h2>
        <div className="toolbar">
          <input type="text" placeholder="Type to search" onChange={this.changeHandler} />
          <button type="button">Add New</button>
        </div>
        <div className="productList">
          {
            products.map(el => (
              <div className="productCard" key={el.id}>
                <span className="elemControl edit"></span>
                <span className="elemControl delete" onClick={() => delProd(el.id)} ></span>
                <div className="image">
                  <img alt="" src={el.image ? el.image : "./images/holder.png"} />
                </div>
                <p><Editable text={el.title} callback={updProdName} element={el} /></p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Products;
