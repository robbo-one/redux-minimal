import React from 'react'

function Flamingos(props) {
    const { store } = props
    const state = store.getState()
    const flamingos = state.flamingos


const deleteFlamingo = (flamingo) => {
    const action = {
      type: 'DEL_FLAMINGO',
      flamingo: flamingo
    }
    store.dispatch(action)
  }

  const addFlamingo = (evt) => {
    evt.preventDefault()
    const action = {
      type: 'ADD_FLAMINGO',
      wombat: evt.target.newFlamingo.value
    }
    store.dispatch(action)
  }

  const updateFlamingo = (flamingo, evt) => {
    evt.preventDefault()
    const action = {
      type: 'UPDATE_FLAMINGO',
      flamingo: flamingo,
      newName: evt.target.newName.value
    }
    store.dispatch(action)
  }

  return (
    <div>
      <h1>Flamingos</h1>
      <ul>
        {flamingos.map((flamingo) =>
          <li key={flamingo}>{flamingo}
            <button onClick={() => deleteFlamingo(flamingo)}>Delete</button>
  
            <form onSubmit={(evt) => updateFlamingo(flamingo, evt)}>
  
              <label for='updateFlamingo'>Change Flamingo Name:</label>
              <input type='text' name='newName' placeholder="new name"></input>
              <button>Update</button>
  
            </form>
  
            <br></br>
          </li>)}
      </ul>
      <br></br>
      <form onSubmit={addFlamingo}>
        <label for='newFlamingo'>Add Flamingo Name:</label><br></br>
        <input type='text' name='newFlamingo'></input>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  )
  
  }
  
  export default Flamingos