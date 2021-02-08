
const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']
}

const wombatReducer = (state = initialWombatState, action) => {
  console.log(state)
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
        wombats: state.wombats.map(wombat => {
          // return wombat === action.oldWombat ? action.newWombat : wombat
          if(wombat === action.oldWombat) {
             return action.newWombat
          }
          return wombat
        })
    }
    default:
      return state
  }
  
}

export default  wombatReducer
