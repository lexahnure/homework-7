import '@babel/polyfill';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import AppComp from './appComponent';
import store, { history } from './store';
import { runSaga } from './store/index';

import './reset.scss';
import './styles.scss';

runSaga();

const Wrapper = (
  <Provider store={store}>
    <Router>
      <AppComp />
    </Router>
  </Provider>
);

if (module.hot) {
  module.hot.accept();
}

ReactDom.render(Wrapper, document.getElementById('app'));
