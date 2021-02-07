const initialWombatState = {
  wombats: ["Gertrude", "Bartholemew"],
};

//starts with user action - object just dispatched. While is is in reducer it is in limbo. State is then updated from store.
//reducer functions take two values - initial state and action to be taken eg add wombat
const wombatReducer = (state = initialWombatState, action) => {
  switch (action.type) {
    case "ADD_WOMBAT":
      return {
        wombats: [...state.wombats, action.wombat],
      };
    case "DEL_WOMBAT":
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat),
        //filter over wombats and return those wombats where no action
      };

    case "UPDATE_WOMBAT":
      //we iterate over each oldWombat that are in old state, check if oldWombat = action oldName, if so, return new name. otherwise return old wombat.
      return {
        wombats: state.wombats.map((oldWombat) => {
          if (oldWombat == action.oldName) {
            return action.newName;
          } else {
            return oldWombat;
          }
        }),
      };

    default:
      return state;
  }
};

export default wombatReducer;
