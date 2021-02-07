import React from 'react'

import Wombats from './Wombats'
//app renders updated store which is held in props
function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
    </div>
  )
}

export default App
