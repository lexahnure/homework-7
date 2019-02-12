import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { user } from './user';
import { info, categories, category } from './categories';
import { product, products } from './products';
import { rootSaga } from './rootSaga';
import { error } from './status';
// import * as reducers from './reducers';

const rootReducers = combineReducers({
  user,
  info,
  products,
  product,
  error,
  categories,
  category,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const runSaga = () => sagaMiddleware.run(rootSaga);

export default store;
