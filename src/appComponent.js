import Header from './components/header/index';
import Main from './components/main/index';
import { checkUser, getInfo, getProducts, updateProductName, deleteProduct } from './services';


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
  }

  updProdName = (data) => {
    console.log(data);
    updateProductName(data.id, data)
      .then(() => getProducts()
        .then(items => this.setState({ items })));
  }

  delProd = (id) => {
    deleteProduct(id)
      .then(() => getProducts()
        .then(items => this.setState({ items })));
  }

  render() {
    const { user, info, loading, items } = this.state;

    return (
      <>
        <Header user={user} info={info} />
        <Main
          user={user}
          info={info}
          onLogin={this.onLogin}
          loading={loading}
          items={items}
          updProdName={this.updProdName}
          delProd={this.delProd}
        />
      </>
    );
  }
}

export default AppComp;
