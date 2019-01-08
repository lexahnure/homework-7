import PropTypes from 'prop-types';
import Product from '../../components/product';
import Products from '../../components/products';
import './home.scss';

class Home extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    info: PropTypes.object,
  }

  static defaultProps = {
    info: {}
  }

  render() {
    const {
      user = {},
      info,
      items,
      updProdName,
      delProd
    } = this.props;

    return (
      <>
        <div className="helloBoard">
          <h2>Hello, {user.firstName}</h2>
          {
            info && (
            <>
              <p>You have {info.categories} categories ({info.publishedCategories} published)</p>
              <p>You have {info.products} products</p>
              <a href="/">Go to categories</a>
            </>
            )
          }
        </div>
      </>
    );
  }
}

export default Home;
