import Header from './components/header/index';
import Main from './components/main/index';
import { checkUser, getInfo, getProducts, requestUpdateProductName, requestDeleteProduct } from './services';
import { Pages } from './pages/Pages';


class AppComp extends Component {
  state = {
    user: null,
    info: null,
    loading: true,
    items: []
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setState({ loading: false, user }))
      .catch(() => this.setState({ loading: false }), console.log(this.state.user));
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
  }

  updateProductName = (data) => {
    console.log(data);
    requestUpdateProductName(data.id, data)
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
      items
    } = this.state;

    return (
      <>
        <Header user={user} info={info} />
        <Main
          onLogin={this.onLogin}
          loading={loading}
        >
          <Pages
            onLogin={this.onLogin}
            user={user}
            info={info}
            items={items}
            updateProductName={this.updateProductName}
            deleteProduct={this.deleteProduct}
          />
        </Main>
      </>
    );
  }
}

export default AppComp;
