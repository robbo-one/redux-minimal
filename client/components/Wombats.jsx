import React from "react"
import { AddWombat } from "./AddWombat"
import { DeleteWombat } from "./DeleteWombat"
import { UpdateWombat } from "./UpdateWombat"

function Wombats(props) {
  const { store } = props
  const state = store.getState()
  const wombats = state.wombats

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => (
          <li key={wombat}>
            {wombat} 
            <DeleteWombat wombat={wombat} store={store} />
            <UpdateWombat wombat={wombat} store={store} />
          </li>
        ))}
      </ul>
      <AddWombat store={store} />
    </div>
  )
}

export default Wombats
