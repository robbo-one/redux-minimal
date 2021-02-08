import React from 'react'

function Aardvarks (props) {
    const {store} = props
    const state = store.getState()
    const aardvarks = state.aardvarks


const deleteAardvark = (aardvark) => {
    const action = {
        type: 'DEL_AARDVARK',
        aardvark: aardvark
    }
    store.dispatch(action)
  }

const addAardvark = (evt) => {
    evt.preventDefault()
    store.dispatch(addAardvark(evt.target.newName.value))
  }

const updateAardvark = (aardvark, evt) => {
    evt.preventDefault()
    const action = {
      type: 'UPDATE_WOMBAT',
      aardvark: aardvark,
      newName: evt.target.newName.value
    }
    store.dispatch(action)
  }

  return (
    <div>
      <h1>Aardvarks</h1>
      <ul>
        {aardvarks.map((aardvark) => <li key={aardvark}>{aardvark}
        <button onClick={() => deleteAardvark(aardvark)}>DELETE</button>
        <form onSubmit={(evt) => updateAardvark(aardvark, evt)}>
        <label for='updateAardvark'>Update Aardvark</label><br></br>
          <input type="text" name="newName"></input>
       
        <button>Update!</button>
        </form>
        <br></br>
        </li>
        )}
        
        </ul>
        <br></br>

     
      <form onSubmit={addAardvark}>
        <label>
          Add a Aardvark! </label> <br></br>
          <input type="text" name="newName"></input>
       
        <button>Add!</button>
      </form>
    </div>
  )
  }


export default Aardvarks