import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCategoriesAsync, updateCategoriesAsync, cleanCategories } from 'store/categories';
import ControlItems from 'components/controlItems';

const isPublished = category => category.published;
const notPublished = category => !category.published;

class Categories extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getCategoriesAsync());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(cleanCategories());
  }

  unpublishCategory = (id) => {
    const { dispatch, categories } = this.props;
    const category = categories.find(category => category.id === id);
    category.published = false;
    dispatch(updateCategoriesAsync(category));
  }

  publishCategory = (id) => {
    const { dispatch, categories } = this.props;
    const category = categories.find(category => category.id === id);
    category.published = true;
    dispatch(updateCategoriesAsync(category));
  }

  updateCategories = (title, id) => {
    const { dispatch, categories } = this.props;
    const category = categories.find(category => category.id === id);
    category.title = title;
    dispatch(updateCategoriesAsync(category));
  }

  render() {
    const { categories, history } = this.props;

    return (
      <>
        <section>
          <h2>Categories</h2>
          {
            categories && (
              <ControlItems
                leftItems={categories.filter(isPublished)}
                rightItems={categories.filter(notPublished)}
                onChangeLeftItem={this.updateCategories}
                removeItem={this.unpublishCategory}
                addItem={this.publishCategory}
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
  categories: state.categories
});

export default withRouter(connect(mapState)(Categories));
