import React from 'react'

function Aardvarks(props){
  const { store } = props
  const state = store.getState()
  const aardvarks = state.aardvarks

  const deleteAardvark = (aardvark) => {
    store.dispatch({
      type: "DEL_AARDVARK",
      aardvark: aardvark,
    })
  }

  const addAardvark = (evt) => {
    evt.preventDefault()
    store.dispatch({
      type: "ADD_AARDVARK",
      aardvark: evt.target.newAardvark.value,
    })
  }

  const updateAardvark = (aardvark, evt) => {
    evt.preventDefault()
    store.dispatch({
      type: 'UPDATE_AARDVARK',
      oldAardvark: aardvark,
      newAardvark: evt.target.newAardvark.value
    })
  }

  return (
    <div>
      <h1>Aardvarks</h1>
      <ul>
        {aardvarks.map((aardvark) => (
          <li key={aardvark}>
            {aardvark}{" "}
            <button onClick={() => deleteAardvark(aardvark)}>Delete</button>{" "}
            <form onSubmit={(evt) => updateAardvark(aardvark, evt)}>
              <label>
                Update {aardvark}:  
                <input
                  type="text"
                  name="newAardvark"
                  placeholder="new name"
                ></input>
              </label>
              <button>Update!</button>
            </form>
          </li>
        ))}
      </ul>

      <form onSubmit={addAardvark}>
        <label>
          Add an Aardvark! <br></br>
          <input type="text" name="newAardvark" placeholder="new aardvark"></input>
        </label>
        <button>Add!</button>
      </form>
    </div>
  )
}

export default Aardvarks