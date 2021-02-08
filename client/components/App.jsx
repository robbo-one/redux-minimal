import React from 'react'

import Wombats from './Wombats'
import AddWombat from './AddWombat'
import Aardvarks from './Aardvarks'
import AddAardvark from './AddAardvark'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      <AddWombat store={props.store} />
      <Aardvarks store={props.store} />
      <AddAardvark store={props.store} />
    </div>
  )
}

export default App
