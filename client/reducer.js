import { combineReducers } from 'redux'

const initialWombatState = ['Gertrude', 'Bartholemew']

const initialFlamingoState = ['Mr Bigglesworth', 'Mrs Brown', 'Winston']

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

const flamingoReducer = (state = initialFlamingoState, action) => {
  switch(action.type) {
    case 'ADD_FLAMINGO':
      return [...state, action.flamingo]
      case 'DEL_FLAMINGO':
        return state.filter((flamingo) => flamingo !== action.flamingo)
      case 'UPDATE_FLAMINGO':
        return state.map((flamingo) => {
           if (flamingo == action.flamingo){
            flamingo = action.newName  
           }
             return flamingo
          })
      default:
        return state
  }
}

const rootReducer = combineReducers({
  wombats: wombatReducer,
  flamingos: flamingoReducer
})

export default rootReducer