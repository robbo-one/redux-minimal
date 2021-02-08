import { combineReducers } from 'redux'
import aardvarkReducer from './aardvark'
import wombatReducer from './wombat'

export default combineReducers({
  wombats: wombatReducer,
  aardvarks: aardvarkReducer
})