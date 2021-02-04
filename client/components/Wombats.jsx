import React from 'react'

import store from '../store'

function Wombats () {
  const state = store.getState()
  const wombats = state.wombats
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}</li>)}
      </ul>
    </div>
  )
}

export default Wombats
