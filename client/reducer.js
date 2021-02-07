const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']
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
      // const w = wombats.find(wombat => wombat == action.wombat)
      return {
        wombats: state.wombats.map(wombat => {
         return wombat === action.oldWombat ? action.newWombat : wombat
        })
      }
    default:
      return state
  }
}

export default wombatReducer
