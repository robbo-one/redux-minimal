import { ADD_AARDVARK, DEL_AARDVARK, UPDATE_AARDVARK} from '../actions'


const initialState = {
  aardvarks: []
}

const aardvarkReducer = (state = initialState.aardvarks, action) => {
  switch (action.type) {
    case ADD_AARDVARK:
      return [...state, action.aardvark]

    case DEL_AARDVARK:
      return state.filter(
          (aardvark) => aardvark !== action.aardvark
        )
    case UPDATE_AARDVARK:
      return state.map((aardvark) => {
          return aardvark === action.oldAardvark
            ? action.newAardvark
            : aardvark
        })
    default:
      return state
  }
}

export default aardvarkReducer