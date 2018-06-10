import { all } from 'redux-saga/effects';

// import * as counterSagas from './counter';
// import { watchFetchUser, watchFetchTodos } from './user';
// import * as userSagas from './user';

import { counterSagas } from './counter';
import { userSagas } from './user';

export default function* rootSage() {
  // yield all([
  //   fork(watchIncrementAsync),
  //   fork(watchFetchUser),
  //   fork(watchFetchTodos)
  // ]);
  // yield all([
  //   ...Object.values(userSagas),
  //   ...Object.values(counterSagas)
  // ].map(fork));

  yield all([
    ...counterSagas,
    ...userSagas
  ])
}
