import { Link, NavLink } from 'react-router-dom';
import Editable from 'components/editable';
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
    const products = originProds.filter((el) => {
      if (event.target.value.length > 1) {
        return el.title.toLowerCase().includes(event.target.value.toLowerCase());
      }
      return { products: originProds };
    });

    this.setState({ products });
  }

  render() {
    const {
      products
    } = this.state;

    const {
      updateProductName,
      deleteProduct
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
                <span className="elemControl edit" />
                <span className="elemControl delete" onClick={() => deleteProduct(el.id)} />
                <div className="image">
                  <img alt="" src={el.image ? el.image : './images/holder.png'} />
                </div>
                <p><Editable text={el.title} callback={updateProductName} element={el} /></p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Products;
