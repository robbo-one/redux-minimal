import { combineReducers } from 'redux'

import wombatReducer from './reducer'
import dragonReducer from './dragReducer'



const myReducer = combineReducers({
    wombats: wombatReducer,
    dragons: dragonReducer
  })




export default myReducer