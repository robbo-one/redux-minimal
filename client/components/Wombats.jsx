import React, { useState } from 'react'
import { delWombat } from '../actions'

import UpdateWombat from './UpdateWombat'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  const deletingWombat = (wombat) => {
    store.dispatch(delWombat(wombat))
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => {
          return (
            <>
              <li key={wombat}>{wombat}</li>
              <button onClick={() => deletingWombat(wombat)}>
                Delete
              </button>
              <UpdateWombat store={props.store} wombat={wombat} />
            </>
            )
          })}
      </ul>
    </div>
  )
}

export default Wombats
