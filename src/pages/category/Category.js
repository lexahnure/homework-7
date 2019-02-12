import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getOneCategoryAsync, updateOneCategoryAsync, cleanOneCategory } from 'store/categories';
import ControlItems from 'components/controlItems';
import Editable from 'components/editable';

const isPublished = product => product.published;
const notPublished = product => !product.published;

class Category extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(getOneCategoryAsync(match.params.id));
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cleanOneCategory());
  }

  unpublishCategory = (id) => {
    const { dispatch, category } = this.props;
    const product = category.products.find(product => product.id === id);
    const index = category.products.indexOf(product);
    product.published = false;
    category.products[index] = product;
    dispatch(updateOneCategoryAsync(category));
  }

  publishProduct = (id) => {
    const { dispatch, category } = this.props;
    const product = category.products.find(product => product.id === id);
    const index = category.products.indexOf(product);
    product.published = true;
    category.products[index] = product;
    console.log(category);
    dispatch(updateOneCategoryAsync(category));
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
    const { category, history } = this.props;

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
            category && category.products ? (
              <ControlItems
                leftItems={category.products.filter(isPublished)}
                rightItems={category.products.filter(notPublished)}
                onChangeLeftItem={this.updateCategories}
                removeItem={this.unpublishCategory}
                addItem={this.publishProduct}
                history={history}
                rightColumnName="Unpublished"
                leftColumnName="Publsihed"
              />
            ) : (
              <div>
                <p>There are no products</p>
              </div>
            )
          }
        </section>
      </>
    );
  }
}

const mapState = state => ({
  category: state.category,
});

export default withRouter(connect(mapState)(Category));
