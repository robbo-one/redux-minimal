import { combineReducers } from 'redux'

import wombats from './wombats'
import aardvarks from './aardvarks'


export default combineReducers({
  wombats: wombats,
  aardvarks: aardvarks
})