import React from 'react'

import Wombats from './Wombats'
// import Ducks from './Ducks'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      {/* <Ducks store={props.store} /> */}
    </div>
  )
}

export default App
