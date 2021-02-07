const initialWombatState = {
  wombats: ['Gertrude', 'Bartholemew']
}

const wombatReducer = (state = initialWombatState, action) => {
  
  switch (action.type) {
    case 'ADD_WOMBAT':
      const nextState = {
        wombats: [...state.wombats, action.wombat]
      }
      return nextState
    case 'DEL_WOMBAT':
      return {
        wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
        //filter over wombats and return those wombats where no action was taken
      }
    case 'UPDATE_WOMBAT':
      return {
        wombats: state.wombats.map((oldWombat) => {
          if (oldWombat == action.oldName) {
            return action.newName
                    } else {
                      return oldWombat
                    }
      })
    }
    default:
      return state
  }
}

export default wombatReducer
