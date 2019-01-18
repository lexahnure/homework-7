import { Redirect, withRouter } from 'react-router-dom';
import Header from './components/header/index';
import Main from './components/main/index';
import { checkUser, getInfo, getProducts, requestUpdateProduct, requestDeleteProduct } from './services';
import { Pages } from './pages/Pages';


class AppComp extends Component {
  state = {
    user: null,
    info: null,
    loading: true,
    items: [],
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.user && this.state.user) {
      getInfo()
        .then(info => this.setState({ info }));
      getProducts()
        .then(items => this.setState({ items }));
    }
  }

  onLogin = (user) => {
    this.setState({ user });
    console.log(user);
  }

  onLogout = () => {
    this.setState({ user: null });
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
      user,
      info,
      loading,
      items,
    } = this.state;

    const ConnectedHeader = withRouter(({ history }) => (
      <Header
        user={user}
        info={info}
        onLogout={this.onLogout}
        history={history}
      />
    ));

    return (
      <>
        <ConnectedHeader />
        <Main
          loading={loading}
        >
          <Pages
            onLogin={this.onLogin}
            user={user}
            info={info}
            items={items}
            updateProduct={this.updateProduct}
            deleteProduct={this.deleteProduct}
          />
        </Main>
      </>
    );
  }
}

export default AppComp;
