/* eslint-disable jsx-a11y/anchor-is-valid */
import { connect } from 'react-redux';
import Editable from 'components/editable';
import { getProductsAsync, updateProductAsync, deleteProductAsync, cleanProducts } from '../../store/products';
import './products.scss';

class Products extends Component {
  state = {
    products: [],
    originProds: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products !== prevState.originProds) {
      return { originProds: nextProps.products, products: nextProps.products };
    }
    return null;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductsAsync());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cleanProducts());
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

  goToProduct = (el) => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    const { history } = this.props;
    history.push(`/products/${el.id}`);
  }

  updateProductName = (val, el) => {
    const { dispatch } = this.props;
    const updatedProduct = {
      ...el,
      title: val
    };
    dispatch(updateProductAsync(updatedProduct));
  }

  render() {
    const {
      products
    } = this.state;

    const {
      history,
      dispatch
    } = this.props;

    return (
      <div className="card">
        <h2>
          Products
        </h2>
        <div className="toolbar">
          <input type="text" placeholder="Type to search" onChange={this.changeHandler} />
          <button type="button" onClick={() => history.push('/products/new')}>Add New</button>
        </div>
        <div className="productList">
          { products && (
            products.map(el => (
              <div className="productCard" key={el.id}>
                <span className="elemControl edit" onClick={() => this.goToProduct(el)} />
                <span className="elemControl delete" onClick={() => dispatch(deleteProductAsync(el.id))} />
                <div className="image">
                  <a href="" onClick={() => this.goToProduct(el)}>
                    <img alt="" src={el.image ? el.image : '/images/holder.png'} />
                  </a>
                </div>
                <p><Editable text={el.title} callback={val => this.updateProductName(val, el)} element={el} /></p>
              </div>
            )))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products, product }) => ({ products, product });

export default connect(mapStateToProps)(Products);
