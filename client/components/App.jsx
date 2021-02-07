import React from 'react'
import Dragons from './Dragons'
import Wombats from './Wombats'

function App (props) {
  return (
    <div>
      <Wombats store={props.store} />
      <Dragons store={props.store} />
    </div>
  )
}

export default App
