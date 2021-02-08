const initialWombatState = ['Gertrude', 'Bartholemew']


export const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, action.wombat]
    case 'DEL_WOMBAT':
      return state.filter((wombat) => wombat !== action.wombat)
    case 'UPDATE_WOMBAT':
      return state.map((wombat) => {
          if (wombat === action.wombat) {
            wombat = action.newName
          }
          return wombat
        })  
    default:
      return state
  }
}

export default wombatReducer

