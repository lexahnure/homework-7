import { takeEvery, put, all } from 'redux-saga/effects';
import { setInfo, GET_INFO_ASYNC, setCategories, GET_CATEGORIES_ASYNC, UPDATE_CATEGORIES_ASYNC, getCategoriesAsync, setOneCategory, GET_ONE_CATEGORY_ASYNC, UPDATE_ONE_CATEGORY_ASYNC } from './actions';
import { getInfo, getCategories, updateCategory, getCategory } from '../../services';
import { info as initial } from '../initialState';

function* getInfos() {
  const info = yield getInfo();
  yield put(setInfo(info));
}

function* getCategoriesSaga() {
  const categories = yield getCategories();
  yield put(setCategories(categories));
}

function* getOneCategorySaga(action) {
  const category = yield getCategory(action.data);
  yield put(setOneCategory(category));
}

function* updCategoriesSaga(action) {
  yield updateCategory(action.data);
  yield put(getCategoriesAsync());
}

function* updOneCategorySaga(action) {
  const { data } = action;
  const category = yield updateCategory(data);
  // const category = yield getCategory(data.id);
  yield put(setOneCategory(category));
}

export function* watchCategories() {
  yield all([
    takeEvery(GET_INFO_ASYNC, getInfos),
    takeEvery(GET_CATEGORIES_ASYNC, getCategoriesSaga),
    takeEvery(UPDATE_CATEGORIES_ASYNC, updCategoriesSaga),
    takeEvery(GET_ONE_CATEGORY_ASYNC, getOneCategorySaga),
    takeEvery(UPDATE_ONE_CATEGORY_ASYNC, updOneCategorySaga),
  ]);
}
