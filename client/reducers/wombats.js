const initialState = ['Gertrude', 'Bartholemew']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, action.wombat]
    case 'DEL_WOMBAT':
      return state.filter((wombat) => wombat !== action.wombat)
    case 'UPDATE_WOMBAT':
      return state.map((wombat) => {
          if(wombat === action.wombat){
            return action.newWombat
          } else {
            return wombat
          }
        })
    default:
      return state
  }
}

export default reducer
