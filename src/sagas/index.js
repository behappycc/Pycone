import { fork, all } from 'redux-saga/effects'

import { watchGetAllProducts } from './productSaga'
import { watchGetWsBs } from './wsBsSaga'

export default function* rootSaga() {
  yield all([
    fork(watchGetAllProducts),
    fork(watchGetWsBs)
  ])
}