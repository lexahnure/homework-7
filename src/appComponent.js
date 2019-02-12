import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';
import Header from './components/header/index';
import Main from './components/main/index';
import { getProducts, requestUpdateProduct, requestDeleteProduct } from './services';
import { Pages } from './pages/Pages';
import { check, logout } from './store/user';
import { getInfoAsync, cleanInfo } from './store/categories';
import { cleanError } from './store/status';


class AppComp extends Component {
  state = {
    loading: true,
    items: [],
  }

  componentDidMount() {
    const { dispatch } = this.props;
  /*checkUser()
    .then(user => this.setState({ loading: false, user }))
    .catch(() => this.setState({ loading: false }));*/
    dispatch(check());
    this.setState({ loading: false });
  }

  componentDidUpdate(prevProps) {
    const { dispatch, history, error, user } = this.props;

    if (!prevProps.user && user) {
      dispatch(getInfoAsync());
    }
    if (prevProps.user && !user) {
      history.push('/');
    }
    if (!prevProps.error && error) {
      this.container.error(
        error,
        'Error!'
      );
      dispatch(cleanError());
    }
  }

  onLogout = () => {
    const { dispatch } = this.props;
    dispatch(logout());
    dispatch(cleanInfo());
  }

  updateProduct = (data) => {
    requestUpdateProduct(data)
      .then(() => getProducts()
        .then(items => this.setState({ items })));
  }

  deleteProduct = (id) => {
    requestDeleteProduct(id)
      .then(() => getProducts()
        .then(items => this.setState({ items })));
  }

  render() {
    const {
      loading,
      items,
    } = this.state;

    const { user, info } = this.props;

    return (
      <>
        <Header
          user={user}
          info={info}
          onLogout={this.onLogout}
        />
        <Main
          loading={loading}
        >
          <Pages
            user={user}
            items={items}
            updateProduct={this.updateProduct}
            deleteProduct={this.deleteProduct}
          />
        </Main>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
      </>
    );
  }
}

const mapStateToProps = ({ user, error, info }) => ({ user, error, info });

export default withRouter(connect(mapStateToProps)(AppComp));

export { AppComp };
