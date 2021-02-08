import React from 'react'

import Wombats from './Wombats'
import Aardvarks from './Aardvarks'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      <Aardvarks store={props.store} />
    </div>
  )
}

export default App
