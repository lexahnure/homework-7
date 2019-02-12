import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import Home from './home';
import Products from './products';
import Product from './product';
import HomeUnauthorized from './homeUnauthorized';
import SuccessfullRegister from './successfullRegister';
import Categories from './categories';
import Profile from './profile';
import Contacts from './Contacts';
import Category from './category';

export const Pages = ({
  user,
  updateProduct,
}) => (

  <Switch>
    <Route
      path="/products/:id"
      render={({ match, history }) => <Product match={match} history={history} />}
    />
    <Route
      path="/categories/:id"
      render={({ match, history }) => <Category match={match} history={history} />}
      key="category"
    />
    {
      !user ? [
        <Route
          path="/login"
          exact
          component={Login}
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
          component={HomeUnauthorized}
          key="homeless"
        />,
      ] : [
        <Route
          path="/products"
          render={({ history }) => (
            <Products
              history={history}
            />
          )}
          key="products"
        />,
        <Route
          path="/categories"
          component={Categories}
          key="categories"
        />,
        <Route
          path="/(home)?"
          exact
          component={Home}
          key="home"
        />,
        <Route
          path="/profile"
          exact
          component={Profile}
          key="profile"
        />,
        <Route
          path="/contacts"
          exact
          component={Contacts}
          key="contacts"
        />,
        <Redirect from="/login" to="/home" key="redirectToHome" />
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