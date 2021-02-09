import React from 'react'
import AddWombat from './AddWombat'

import Wombats from './Wombats'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      <AddWombat store={props.store} />
    </div>
  )
}

export default App