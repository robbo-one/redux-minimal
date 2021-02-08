const initialState =  ['Te Kaha', 'Te Mana']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AARDVARK':
      return [...state, action.aardvark]
    case 'DEL_AARDVARK':
      return state.filter((aardvark) => aardvark !== action.aardvark)
    case 'UPDATE_AARDVARK':
      return state.map((aardvark) => {
          if(aardvark === action.aardvark){
            return action.newaardvark
          } else {
            return aardvark
          }
        })
    default:
      return state
  }
}

export default reducer