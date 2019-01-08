import './product.scss';
import Editable from '../editable';

class Product extends Component {

  render() {
    return (
      <div className="product card">
        <h2>
          Title: <Editable placeholder={'type product name'} />
        </h2>
        <h4>
          price, $: <Editable placeholder={'type product price'} />
        </h4>
        <p>
          <Editable placeholder={'type product description'} multiline />
        </p>
        <input type="button" value="Save"/>
      </div>
    );
  }
}

export default Product;
