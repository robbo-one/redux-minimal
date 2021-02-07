import { combineReducers } from 'redux'

const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']}
const initialAardvarkState = {
    aardvarks: ['leptodon', 'adametzi']
  }


const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        wombats: [...state.wombats, action.wombat]
      }
    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
      }
    case 'UPDATE_WOMBAT':
      return {
        wombats: state.wombats.map((wombat) => {
          if (wombat == action.wombat){
           wombat = action.newName  
          }
            return wombat
         })
      }
    default:
      return state
  }
}

const aardvarkReducer = (state = initialAardvarkState, action) => {
  if(action.type === 'ADD_AARDVARK') {
      return {
          aardvarks: [...state.wombats, action.aardvark]
      }
  }
  else {
      return state
  }
}
export default wombatReducer
