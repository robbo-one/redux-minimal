import React from 'react'
import { addWombat } from '../actions'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  const deleteWombat = (wombat) => {
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    store.dispatch(action)
  }
  const newWombat = (evt) => {
    evt.preventDefault()
    console.log(evt.target.newName.value)
    store.dispatch(addWombat(evt.target.newName.value))
  }

  const updateWombat = (wombat, evt) => {
    evt.preventDefault()
    const action = {
      type: 'UPDATE_WOMBAT',
      wombat: wombat,
      newName: evt.target.newName.value
    }
    store.dispatch(action)
  }
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}
        <button onClick={() => deleteWombat(wombat)}>DELETE</button>
        <form onSubmit={(evt) => updateWombat(wombat, evt)}>
        <label>
          Update Wombat  </label><br></br>
          <input type="text" name="newName"></input>
      
        <button type='submit'>Update!</button>
        </form>
        <br></br>
        </li>
        )}
        </ul>
        <br></br>

     
      <form onSubmit={newWombat}>
        <label>Add a Wombat!</label><br></br>
          <input type="text" name="newName"/>
  
        <button>Add!</button>
      </form>
    </div>
  )
}

export default Wombats
