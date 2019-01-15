import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import Home from './home';
import Products from './products';
import Product from './product';
import HomeUnauthorized from './homeUnauthorized';
import SuccessfullRegister from './successfullRegister';
import Loader from '../components/loader';

export const Pages = ({
  onLogin,
  user,
  info,
  items,
  updateProductName,
  deleteProduct,
  registerUser,
  isRegistered,
}) => (

  <Switch>
    <Route
      path="/products/:id"
      component={Product}
    />
    {
      !user ?
        [
          <Route
            path="/login"
            exact
            render={() => <Login onLogin={onLogin} />}
            key="login"
          />,
          <Route
            path="/user"
            exact
            render={props => (<CreateUser history={props.history} />)}
            key="user"
          />,
          <Route
            path="/success"
            exact
            component={SuccessfullRegister}
            key="success"
          />,
          <Route
            path="/(home)?"
            exact
            render={() => <Loader />}
            key="homeless"
          />,
        ] :
        [
          <Route
            path="/products"
            render={() => (
              <Products
                items={items}
                info={info}
                updateProductName={updateProductName}
                deleteProduct={deleteProduct}
              />
            )}
            key="products"
          />,
          <Route
            path="/product"
            render={() => <Product />}
            key="product"
          />,
          <Route
            path="/(home)?"
            exact
            render={() => <Home user={user} info={info} />}
            key="home"
          />,
          <Redirect from="/login" to="/home" />
        ]
    }
    <Route
      render={props => (
        <h1>
          <mark>
            Ти заблукав? Чи шо? Це шукаеш {props.location.pathname}?
          </mark>
        </h1>
      )}
    />
  </Switch>
);

//<Products items={items} updProdName={updProdName} delProd={delProd} />
//<Product />