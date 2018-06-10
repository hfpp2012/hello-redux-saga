import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';

import { INCREMENT_ASYNC } from '../constants/counter';

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
  yield call(delay, 2000);
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export const counterSagas = [
  watchIncrementAsync()
]
