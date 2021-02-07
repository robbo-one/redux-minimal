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
      return {
        wombats: state.wombats.map((wombat) => {
          if (
            wombat === action.wombat 
          ){
            return action.newWombat
          }else {
            return wombat
          }
        })
      }
    default:
      return state
  }
}


export default wombatReducer

// case 'UPDATE_WOMBAT':
//   return {
//     wombats: state.wombats.map((wombat) => {
//       if (wombats.wombat === '')
//     })
//   }