import Editable from '../../components/editable';
import { getProduct } from 'services';
import './product.scss';

class Product extends Component {
  state = {
    prodInfo: undefined
  }

  componentDidMount() {
    const { match } = this.props;
    getProduct(match.params.id)
      .then(prodInfo => this.setState({ prodInfo }));
  }

  render() {
    const { prodInfo = {} } = this.state;
    
    return (
      <div className="product card">
        <h2>
          Title: <Editable text={prodInfo.title} />
        </h2>
        <h4>
          price, $: <Editable text={prodInfo.price} />
        </h4>
        <span><img alt="" src={prodInfo.image ? prodInfo.image : './images/holder.png'} /></span>
        <p>
          <Editable text={prodInfo.description} multiline />
        </p>
        <input type="button" value="Save" />
      </div>
    );
  }
}

export default Product;
