import React from 'react'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  const deleteWombat = (wombat) => {
    store.dispatch({
      type: 'DEL_WOMBAT',
      wombat: wombat
    })
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat} <button onClick={() => deleteWombat(wombat)}>Delete</button></li>)}
      </ul>
    </div>
  )
}

export default Wombats
