const initialWombatState = ['Gertrude', 'Bartholemew']


export const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...wombats, action.wombat]

    case 'DEL_WOMBAT':
      return {
        wombats: wombats.filter((wombat) => wombat !== action.wombat)
      }
    case 'UPDATE_WOMBAT':
      return {
        wombats: wombats.map((wombat) => {
          if (wombat === action.wombat) {
            wombat = action.newName
          }
          return wombat
        })  
      }
    default:
      return state
  }
}

export default wombatReducer

