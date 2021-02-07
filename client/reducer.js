const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']  // initial global state
}


// a reducer is just a function. heres what state should look like after the function has gone through.


const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return {
        wombats: [...state.wombats, action.wombat] // spread operator, take existing wombats and add the wombat to existing
      }
    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
      }
      case 'UPDATE_WOMBAT':
        return {
          wombats: state.wombats.map((wombat) => {
            if (wombat === action.wombat) {
            return action.newWombat
          } else {
            return wombat
            }
          })
         
        }
    default: // if neither returns to default state
      return state
  }
}

export default wombatReducer


//could also be written using if/else statements

// const wombatReducer = (state = initialWombatState, action) => {
//   if  (action.type) {
//     case 'ADD_WOMBAT':
//       return {
//         wombats: [...state.wombats, action.wombat] // spread operator, take existing wombats and add the wombat to existing
//       }
//     else if (action.type === 'DEL_WOMBAT') {}
//       return {
//         wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
//       }
//     else { // if neither returns to default state
//       return state
//   }
// }