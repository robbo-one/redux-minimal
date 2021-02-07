const initialFlamingoState = ['Mr Bigglesworth', 'Mrs Brown', 'Winston']

const flamingoReducer = (state = initialFlamingoState, action) => {
    switch(action.type) {
      case 'ADD_FLAMINGO':
        return [...state, action.flamingo]
        case 'DEL_FLAMINGO':
          return state.filter((flamingo) => flamingo !== action.flamingo)
        case 'UPDATE_FLAMINGO':
          return state.map((flamingo) => {
             if (flamingo == action.flamingo){
              flamingo = action.newName  
             }
               return flamingo
            })
        default:
          return state
    }
  }
  
  export default flamingoReducer