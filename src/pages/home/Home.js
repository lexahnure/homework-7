import PropTypes from 'prop-types';
import Product from '../product';
import Products from '../products';
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
      updateProductName,
      deleteProduct
    } = this.props;

    return (
      <>
        <div className="helloBoard">
          {user && <h2>Hello, {user.firstName}</h2>}
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
