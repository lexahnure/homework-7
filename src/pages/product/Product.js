import { connect } from 'react-redux';
import { getProduct, requestUpdateProduct } from 'services';
import Editable from '../../components/editable';
import { getProductAsync, updateProductAsync, sendProductAsync, cleanOneProduct } from '../../store/products';

import './product.scss';

class Product extends Component {
  state = {
    product: {},
  }

  componentDidMount() {
    const { match, dispatch } = this.props;
    if (match.params.id !== 'new') {
      dispatch(getProductAsync(match.params.id));
    }
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cleanOneProduct());
  }

  update = (val, key) => {
    const { product, dispatch } = this.props;
    const newProduct = {
      ...product,
      [key]: val
    };
    dispatch(updateProductAsync(newProduct));
  }

  collectProductData = (val, key) => {
    const { product } = this.state;
    const newProduct = {
      ...product,
      [key]: val,
    };
    this.setState({ product: newProduct });
    console.log(newProduct);
  }

  sendAndBackToProducts = () => {
    const { product } = this.state;
    const { history, dispatch } = this.props;
    dispatch(sendProductAsync(product));
    history.push('/products');
  }

  render() {
    const { product, match } = this.props;

    return (
      <div className="product card">
        {
          // eslint-disable-next-line no-nested-ternary
          product && match.params.id !== 'new' ? (
            <>
              <h2>
                Title: <Editable text={product.title} callback={val => this.update(val, 'title')} />
              </h2>
              <h4>
                price, $: <Editable text={product.price} callback={val => this.update(val, 'price')} />
              </h4>
              <span><img alt="" src={product.image ? product.image : '/images/holder.png'} /></span>
              <p>
                <Editable text={product.description} multiline callback={val => this.update(val, 'description')} />
              </p>
            </>
          ) : match.params.id === 'new' ? (
            <>
              <h2>
                Title: <Editable placeholder="Title" callback={val => this.collectProductData(val, 'title')} />
              </h2>
              <h4>
                price, $: <Editable placeholder="price" callback={val => this.collectProductData(val, 'price')} />
              </h4>
              <div className="image-upload">
                <label htmlFor="file-input">
                  <img alt="" accept="image/*" src="/images/holder.png" />
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange={event => this.collectProductData(event.target.value, 'image')}
                />
              </div>
              <p>
                <Editable
                  placeholder="description"
                  multiline
                  callback={val => this.collectProductData(val, 'description')}
                />
              </p>
              <input type="button" value="Save" onClick={this.sendAndBackToProducts} />
          </>

          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = ({ product }) => ({ product });

export default connect(mapStateToProps)(Product);
