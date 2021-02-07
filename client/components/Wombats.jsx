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

  const addWombat = (evt) => {
    evt.preventDefault()
    store.dispatch({
      type: 'ADD_WOMBAT',
      wombat: evt.target.newWombat.value
    })
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat} <button onClick={() => deleteWombat(wombat)}>Delete</button></li>)}
      </ul>
      <form onSubmit={addWombat}>
        <label>
          Add a Wombat! <br></br>
          <input type="text" name="newWombat" placeholder="new wombat"></input>
        </label>
        <button>Add!</button>
      </form>

    </div>
  )
}

export default Wombats
