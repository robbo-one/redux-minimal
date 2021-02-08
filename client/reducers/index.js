import { combineReducers } from 'redux'

import wombats from './wombats'
import dragons from './dragons'



export default combineReducers({
  wombats: wombats,
  dragons: dragons
})