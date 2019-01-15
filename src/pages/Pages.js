import { Route, Switch } from 'react-router-dom';
import Login from './login';
import CreateUser from './createUser';
import Home from './home';
import Products from './products';
import HomeUnauthorized from './homeUnauthorized';
import SuccessfullRegister from './successfullRegister';

export const Pages = ({ onLogin, user, info, items, updateProductName, deleteProduct }) => (
  <Switch>
    <Route
      path="/"
      render={() => <h1>Hello!</h1>}
      exact
    />
    <Route
      path="/login"
      render={() => <Login onLogin={onLogin} />}
    />
    <Route
      path="/user"
      component={CreateUser}
    />
    <Route
      path="/success"
      component={SuccessfullRegister}
    />
    <Route
      path="/home"
      render={() => (
        user
          ? <Home user={user} info={info} />
          : <HomeUnauthorized />
      )}
    />
    <Route
      path="/products"
      render={() => (
        <Products
          items={items}
          info={info}
          updateProductName={updateProductName}
          deleteProduct={deleteProduct}
        />)}
    />
    <Route
      render={props => <h1><mark>Ти заблукав? Чи шо? Це шукаеш {props.location.pathname}?</mark></h1>}
    />
  </Switch>
);

//<Products items={items} updProdName={updProdName} delProd={delProd} />
//<Product />