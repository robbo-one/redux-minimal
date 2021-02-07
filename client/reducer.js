import { combineReducers } from "redux";

const initialWombatState = {
  wombats: ["Gertrude", "Bartholemew"],
};

const initialAardvarkState = {
  aardvarks: ["Aard", "Varky"],
};

export const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case "ADD_WOMBAT":
      return {
        wombats: [...state.wombats, action.wombat],
      };

    case "DEL_WOMBAT":
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat),
      };

    case "UPDATE_WOMBAT":
      return {
        wombats: state.wombats.map((wombat) => {
          return wombat === action.oldWombat ? action.newWombat : wombat;
        }),
      };

    default:
      return state;
  }
};

export const aardvarkReducer = (state = initialAardvarkState, action) => {
  switch (action.type) {
    case "ADD_AARDVARK":
      return {
        aardvarks: [...state.aardvarks, action.aardvark],
      };

    case "DEL_AARDVARK":
      return {
        aardvarks: state.aardvarks.filter(
          (aardvark) => aardvark !== action.aardvark
        ),
      };

    case "UPDATE_AARDVARK":
      return {
        aardvarks: state.aardvarks.map((aardvark) => {
          return aardvark === action.oldAardvark
            ? action.newAardvark
            : aardvark;
        }),
      };

    default:
      return state;
  }
};

export const reducer = combineReducers({
  wombats: wombatReducer,
  aardvarks: aardvarkReducer,
});
