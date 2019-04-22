import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getOneCategoryAsync, updateOneCategoryAsync, cleanOneCategory } from 'store/categories';
import { getProductsAsync } from 'store/products';
import ControlItems from 'components/controlItems';
import Editable from 'components/editable';

const isPublished = product => product.published;

class Category extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getOneCategoryAsync(match.params.id));
    dispatch(getProductsAsync());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cleanOneCategory());
  }

  unpublishCategory = (id) => {
    const { dispatch, category } = this.props;
    const product = category.products.find(product => product.id === id);
    let newCat = category;

    product.published = false;
    newCat.products = category.products.map((item) => {
      if (item.id === id) {
        item.published = false;
      }
      return item;
    });
    dispatch(updateOneCategoryAsync(newCat));
  }

  publishProduct = (id) => {
    const { dispatch, category, products } = this.props;
    const product = products.find(product => product.id === id);
    let newCat = category;

    product.published = true;

    if (category.products) {
      const item = category.products.find(prod => prod.id === id);

      item ? (
        item.published = true,
        newCat.products = [...category.products]
      ) : newCat.products = [...category.products, product];
    }
    if (!category.products) {
      newCat.products = [product];
    }
    dispatch(updateOneCategoryAsync(newCat));
  }

  updateCategories = (val, key) => {
    const { dispatch, category } = this.props;
    const newCategoryData = {
      ...category,
      [key]: val,
    };
    dispatch(updateOneCategoryAsync(newCategoryData));
  }

  render() {
    const { category, history, products } = this.props;
    // eslint-disable-next-line one-var-declaration-per-line
    let published, nonPubProducts;

    if (category && category.products && products) {
      published = category.products.filter(isPublished);
      const pubIDs = published.map(el => el.id);
      nonPubProducts = products.filter(({ id }) => !pubIDs.includes(id));
    }

    return (
      <>
        <section>
          <h2>
            Category <Editable
              text={category && category.title}
              callback={val => this.updateCategories(val, 'title')}
            />
          </h2>
          {
            // eslint-disable-next-line no-nested-ternary
            category && category.products ? (
              <ControlItems
                leftItems={published}
                rightItems={nonPubProducts}
                onChangeLeftItem={this.updateCategories}
                removeItem={this.unpublishCategory}
                addItem={this.publishProduct}
                history={history}
                rightColumnName="Unpublished"
                leftColumnName="Publsihed"
              />
            ) : (
              <ControlItems
                rightItems={products}
                onChangeLeftItem={this.updateCategories}
                removeItem={this.unpublishCategory}
                addItem={this.publishProduct}
                history={history}
                rightColumnName="Unpublished"
                leftColumnName="Publsihed"
              />
            )
          }
        </section>
      </>
    );
  }
}

const mapState = state => ({
  category: state.category,
  products: state.products,
});

export default withRouter(connect(mapState)(Category));
