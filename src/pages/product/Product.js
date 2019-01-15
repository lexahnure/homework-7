import Editable from '../../components/editable';
import './product.scss';

const Product = () => (
  <div className="product card">
    <h2>
      Title: <Editable placeholder="type product name" />
    </h2>
    <h4>
      price, $: <Editable placeholder="type product price" />
    </h4>
    <p>
      <Editable placeholder="type product description" multiline />
    </p>
    <input type="button" value="Save" />
  </div>
);

export default Product;
