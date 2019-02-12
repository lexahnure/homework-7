import { takeEvery, put, all } from 'redux-saga/effects';
import { setProducts, setOneProduct, GET_PRODUCTS_ASYNC, GET_ONE_PRODUCT_ASYNC, UPDATE_ONE_PRODUCT_ASYNC, DELETE_ONE_PRODUCT_ASYNC, SEND_ONE_PRODUCT_ASYNC, getProductsAsync, SEND_IMAGE_ASYNC } from './actions';
import { getProducts, getProduct, requestUpdateProduct, requestDeleteProduct, sendProduct, sendImage } from '../../services';

function* getProductsHandler() {
  const products = yield getProducts();
  yield put(setProducts(products));
}

function* getProductHandler(action) {
  const product = yield getProduct(action.data);
  yield put(setOneProduct(product));
}

function* updateProductHandler(action) {
  yield requestUpdateProduct(action.data);
  yield put(getProductsAsync());
}

function* deleteProductHandler(action) {
  yield requestDeleteProduct(action.data);
  yield put(getProductsAsync());
}

function* sendProductHandler(action) {
  yield sendProduct(action.data);
  yield put(getProductsAsync());
}

function* sendImageSaga(action) {
  yield sendImage(action.data, action.id);
  yield getProductHandler();
}

export function* watchProducts() {
  yield all([
    takeEvery(GET_PRODUCTS_ASYNC, getProductsHandler),
    takeEvery(GET_ONE_PRODUCT_ASYNC, getProductHandler),
    takeEvery(UPDATE_ONE_PRODUCT_ASYNC, updateProductHandler),
    takeEvery(DELETE_ONE_PRODUCT_ASYNC, deleteProductHandler),
    takeEvery(SEND_ONE_PRODUCT_ASYNC, sendProductHandler),
    takeEvery(SEND_IMAGE_ASYNC, sendImageSaga),
  ]);
}
