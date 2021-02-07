import { combineReducers } from "redux"

const initialState = {
  wombats: [],
  aardvarks: []
}

const wombatReducer = (state = initialState.wombats, action) => {
  switch (action.type) {
    case "ADD_WOMBAT":
      return [...state, action.wombat]
    case "DEL_WOMBAT":
      return state.filter((wombat) => wombat !== action.wombat)
    case "UPDATE_WOMBAT":
      return state.map((wombat) => {
          return wombat === action.oldWombat ? action.newWombat : wombat
        })
    default:
      return state
  }
}

const aardvarkReducer = (state = initialState.aardvarks, action) => {
  switch (action.type) {
    case "ADD_AARDVARK":
      return [...state, action.aardvark]

    case "DEL_AARDVARK":
      return state.filter(
          (aardvark) => aardvark !== action.aardvark
        )
    case "UPDATE_AARDVARK":
      return state.map((aardvark) => {
          return aardvark === action.oldAardvark
            ? action.newAardvark
            : aardvark
        })
    default:
      return state
  }
}

export const reducer = combineReducers({
  wombats: wombatReducer,
  aardvarks: aardvarkReducer,
})

// wombats: ["Gertrude", "Bartholemew"],
//   aardvarks: ["Aard", "Varky"]