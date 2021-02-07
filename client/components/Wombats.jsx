import React from 'react'

function Wombats(props) {
  const { store } = props
  const state = store.getState()
  const wombats = state.wombats

  const deleteWombat = (wombat) => {
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    store.dispatch(action)
  }

  const addWombat = (evt) => {
    evt.preventDefault()
    store.dispatch(addWombat(evt.target.newWombat.value))
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
      {wombats.map((wombat) =>
        <li key={wombat}>{wombat}
          <button onClick={() => deleteWombat(wombat)}>Delete</button>

          <form onSubmit={(evt) => updateWombat(wombat, evt)}>

            <label for='updateWombat'>Change Wombat Name:</label>
            <input type='text' name='newName' placeholder="new name"></input>
            <button>Update</button>

          </form>

          <br></br>
        </li>)}
    </ul>
    <br></br>
    <form onSubmit={addWombat}>
      <label for='newWombat'>Add Wombat Name:</label><br></br>
      <input type='text' name='newWombat'></input>
      <br></br>
      <button>Submit</button>
    </form>
  </div>
)

}

export default Wombats
