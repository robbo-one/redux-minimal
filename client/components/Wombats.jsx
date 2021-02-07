import React from "react"

function Wombats(props) {
  const { store } = props
  const state = store.getState()
  const wombats = state.wombats
  // console.log(wombats)

  // console.log(wombats)

  const deleteWombat = (wombat) => {
    store.dispatch({
      type: "DEL_WOMBAT",
      wombat: wombat,
    })
  }

  const addWombat = (evt) => {
    evt.preventDefault()
    store.dispatch({
      type: "ADD_WOMBAT",
      wombat: evt.target.newWombat.value,
    })
  }

  const updateWombat = (wombat, evt) => {
    evt.preventDefault()
    // console.log(wombat, evt.target)
    store.dispatch({
      type: 'UPDATE_WOMBAT',
      oldWombat: wombat,
      newWombat: evt.target.newWombat.value
    })
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => (
          <li key={wombat}>
            {wombat}{" "}
            <button onClick={() => deleteWombat(wombat)}>Delete</button>{" "}
            <form onSubmit={(evt) => updateWombat(wombat, evt)}>
              <label>
                Update {wombat}:  
                <input
                  type="text"
                  name="newWombat"
                  placeholder="new name"
                ></input>
              </label>
              <button>Update!</button>
            </form>
          </li>
        ))}
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
