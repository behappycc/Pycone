import * as types from '../constants/actionTypes'

export const getWsBsList = (payload) => (
  {
    type: types.GET_WSBS,
    payload: payload
  }
)