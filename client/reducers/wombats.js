import { ADD_WOMBAT, DEL_WOMBAT } from "../actions"

const initialState = ['Gertrude', 'Bartholemew']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_WOMBAT:
      return [...state, action.wombat]
    case 'DEL_WOMBAT':
      return state.filter(wombat => wombat !== action.wombat)
    default:
      return state
  }
}

// Could just be an if/else statement
// const reducer = (state = initialWombatState, action) => {
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

export default reducer


  