const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew'],
  // aardvarks: ['Jim', 'Sally']
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
    default:
      return state
  }
}

// Could just be an if/else statement
// const wombatReducer = (state = initialWombatState, action) => {
//   if (action.type === 'ADD_WOMBAT') {
//       return {
//         wombats: [...state.wombats, action.wombat]
//       }
//   } else if (action.type === 'DEL_WOMBAT') {
//       return {
//         wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
//       }
//   } else {
//     return state
//   }
// }



export default wombatReducer

