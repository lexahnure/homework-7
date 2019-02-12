import { all } from 'redux-saga/effects';

import { watchUser } from './user';
import { watchCategories } from './categories';
import { watchProducts } from './products';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchCategories(),
    watchProducts(),
  ]);
}
