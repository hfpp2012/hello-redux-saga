import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUser() {
  try {
    const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
    yield put({type: "FETCH_USER_SUCCEEDED", user: user});
  } catch(e) {
    yield put({type: "FETCH_USER_FAILURE", error: e.message});
  }
}

function* fetchTodos() {
  const todos = yield call(axios.get, "https://jsonplaceholder.typicode.com/todos");
  console.log(todos);
}

function* watchFetchUser() {
  yield takeEvery('FETCH_USER_REQUEST', fetchUser);
}

function* watchFetchTodos() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
}

export const userSagas = [
  watchFetchUser(),
  watchFetchTodos()
]
