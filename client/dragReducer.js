const initialDragonState = {
  dragon: ['Wingfang', 'Toothless']
}


const dragonReducer = (state = initialDragonState, action) => {
  switch (action.type) {
    case 'ADD_DRAGON':
      return {
        dragons: [...state.dragons, action.dragon]
      }
    case 'DEL_DRAGON':
      return {
        dragons: state.dragons.filter((dragon) => dragon !== action.dragon)
      }
    case 'UPDATE_DRAGON':
      return {
        dragons: state.dragons.map(dragon => {
         return dragon === action.oldDragon ? action.newDragon : dragon
        })
     }
    default:
      return state
  }
}

export default dragonReducer