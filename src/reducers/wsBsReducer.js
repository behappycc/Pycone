import * as types from '../constants/actionTypes'

const initState = {
  wsBs_list: {}
};

export default function wsBsReducer(state=initState, action){
  switch(action.type) {
    case types.GET_WSBS:
    console.log(action.payload)
      return state;

    case types.GET_WSBS_DONE:
      return {
        ...state,
        wsBs_list: action.wsBs_list
      };

    default:
      return state;
  }
}