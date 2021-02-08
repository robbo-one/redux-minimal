const initialDuckState = {
  ducks: ['joey', 'chloe']
}

const duckReducer = (state = initialDuckState, action) => {
  switch (action.type) {
    case 'ADD_DUCK':
      return {
        ducks: [...state.ducks, action.duck]
      }
    case 'DEL_DUCK':
      return {
        ducks: state.ducks.filter((duck) => duck !== action.duck)
      }
    case 'UPDATE_DUCK':
      return {
        ducks: state.ducks.map((duck) => {
          if (
            duck === action.duck 
          ){
            return action.newDuck
          }else {
            return duck
          }
        })
      }
    default:
      return state
  }
}
export default duckReducer