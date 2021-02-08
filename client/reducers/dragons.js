const initialState = ['Wingfang', 'Toothless']



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DRAGON':
      return [...state, action.dragon]
      
    case 'DEL_DRAGON':
      return state.filter((dragon) => dragon !== action.dragon)
      
    case 'UPDATE_DRAGON':
      return state.map(dragon => {
         return dragon === action.oldDragon ? action.newDragon : dragon
        })
     
    default:
      return state
  }
}

export default reducer