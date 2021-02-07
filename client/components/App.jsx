import React from 'react'

import Wombats from './Wombats'
import Flamingos from './Flamingos'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      <Flamingos store={props.store} />
    </div>
  )
}

export default App
