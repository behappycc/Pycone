import { takeLatest, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'

export function* getWsBS(action) {
    console.log('wsBs websocket')
    console.log(action.payload)
//   const response = yield call(ApiGetAllProducts);
//   yield put({
//     type: types.GET_ALL_PRODUCTS_DONE,
//     product_list: response
//   })
}

export function* watchGetWsBs() {
  yield takeLatest(types.GET_WSBS, getWsBS);
}