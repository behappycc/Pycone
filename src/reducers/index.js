import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import navigateTradingPageReducer from './navigateTradingPageReducer'
import wsBsReducer from './wsBsReducer'

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  navigateTradingPageReducer: navigateTradingPageReducer,
  wsBsReducer: wsBsReducer
})

export default rootReducer