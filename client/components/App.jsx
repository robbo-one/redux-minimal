import React from 'react'
// import Aardvarks from './Aardvarks'

import Wombats from './Wombats'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      {/* <Aardvarks store={props.store}/> */}
    </div>
  )
}

export default App
