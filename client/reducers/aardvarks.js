const initialAardvarkState = ['Artimus', 'Phylis']


export const aardvarkReducer = (state = initialAardvarkState, action) => {
  switch (action.type) {
    case 'ADD_AARDVARK':
      return [...state, action.aardvark]      
    case 'DEL_AARDVARK':
      return  state.filter((aardvark) => aardvark !== action.aardvark)
    case'UPDATE_AARDVARK':
      return state.map(aardvark => {
              if (aardvark === action.aardvark) {
                aardvark = action.newName
              }
              return aardvark
            })
    default:
      return state      
  }
}

export default aardvarkReducer