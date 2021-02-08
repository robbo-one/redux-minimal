import { combineReducers } from 'redux'

const initialWombatState = ['Gertrude', 'Bartholemew']
const initialAardvarkState = ['leptodon', 'adametzi']
  


const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, action.wombat]
      
    case 'DEL_WOMBAT':
      return state.filter((wombat) => wombat !== action.wombat)
      
    case 'UPDATE_WOMBAT':
      return state.map((wombat) => {
          if (wombat == action.wombat){
           wombat = action.newName  
          }
            return wombat
         })
      
    default:
      return state
  }
}

const aardvarkReducer = (state = initialAardvarkState, action) => {
 switch(action.type) {
   case 'ADD_AARDVARK':
     return [...state, action.aardvark]
    case 'DEL_AARDVARK':
      return state.filter((aardvark) => aardvark !== action.aardvark)
      
    case 'UPDATE_AARDVARK':
      return state.map((aardvark) => {
          if (aardvark == action.aardvark){
            aardvark = action.newName  
          }
            return aardvark
         })
      
    default:
      return state
 }
}

const rootReducer = combineReducers({
  wombats: wombatReducer,
  aardvarks: aardvarkReducer
})

export default rootReducer
