
import { combineReducers } from 'redux'

import wombats from './wombats'
import flamingos from './flamingos'

const rootReducer = combineReducers({
    wombats: wombats,
    flamingos: flamingos
  })
  
  export default rootReducer