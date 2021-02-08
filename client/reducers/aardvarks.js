import { ADD_AARDVARK, DEL_AARDVARK, UPDATE_AARDVARK } from '../actions'

const initialState = ['Michael', 'Dwight']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AARDVARK:
      return [...state, action.aardvark]
    case DEL_AARDVARK:
      return state.filter(aardvark => aardvark !== action.aardvark)
    case UPDATE_AARDVARK:
      return state.map(aardvark => {
        if(aardvark === action.aardvark) {
          return action.newAardvark
        } else {
          return aardvark
        }
      })
    default:
      return state
  }
}

export default reducer