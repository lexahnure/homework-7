import Login from '../../pages/login';
import Home from '../../pages/home';
import Form from '../form';

import './main.scss';

class Main extends Component {
  renderContent() {
    const { user, onLogin, info, items, updProdName, delProd } = this.props;
    return (
      <React.Fragment>
        {
          user
            ? <Home user={user} info={info} items={items} updProdName={updProdName} delProd={delProd} />
            : <Login onLogin={onLogin} /> //<Form />
        }
      </React.Fragment>
    )
  }

  render() {
    const { loading } = this.props;

    return (
      <main className="main">
        { loading ? 'Loading...' : this.renderContent() }
      </main>
    )
  }
};

export default Main;
