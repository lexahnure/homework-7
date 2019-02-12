import { takeEvery, put, all } from 'redux-saga/effects';
import { setUser, CHECK_USER_ASYNC, LOGIN_USER_ASYNC, LOGOUT_ASYNC, UPDATE_USER_ASYNC } from './actions';
import { checkUser, login, logout, updateUser } from '../../services';
import { user as initial } from '../initialState';
import { setError } from '../status';

function* checkSaga() {
  let user;
  try {
    user = yield checkUser();
    yield put(setUser(user));
  } catch (err) {
    yield put(setError(err));
  }
}

function* loginSaga(action) {
  try {
    const user = yield login(action.data);
    yield put(setUser(user));
  } catch (err) {
  }
}

function* logoutSaga() {
  try {
    yield logout();
    yield put(setUser(initial));
  } catch(err) {
  }
}

function* updateSaga(action) {
  try {
    yield updateUser(action.data);
    yield checkSaga();
  } catch(err) {
    
  }
}

export function* watchUser() {
  yield all([
    takeEvery(CHECK_USER_ASYNC, checkSaga),
    takeEvery(LOGIN_USER_ASYNC, loginSaga),
    takeEvery(LOGOUT_ASYNC, logoutSaga),
    takeEvery(UPDATE_USER_ASYNC, updateSaga),
  ]);
}
