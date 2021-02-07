const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew'],
  aardvarks: ['Te Kaha', 'Te Mana']
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
      return{
        wombats: state.wombats.map((wombat) => {
          if(wombat === action.wombat){
            return action.newWombat
          } else {
            return wombat
          }
        })
      }
    // case 'ADD_AARDVARK':
    //   return{
    //     aardvarks: [...state.aardvarks, action.aardvark]
    //   }
    default:
      return state
  }
}

export default wombatReducer
