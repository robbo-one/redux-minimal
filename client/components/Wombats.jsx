import React from 'react'
import {useState} from 'react'
function Wombats(props) {
  const { store } = props
  const state = store.getState()
  const wombats = state.wombats
  const [name, setName] = useState("");


  const deleteWombat = (wombat) => {
    // Create the action
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    // Send the action
    store.dispatch(action)
  }
  const addWombat = (e) => {
    // Create the action
    e.preventDefault()

    const action = {
      type: 'ADD_WOMBAT',
      wombat: e.target.newWombat.value
    }
    // Send the action
    store.dispatch(action)
  }

  const updateWombat = (e, wombat) => {
    e.preventDefault()
    console.log(e.target.updWombat.value, wombat)
    // Create the action
    const action = {
      type: 'UPDATE_WOMBAT',
      name: e.target.updWombat.value,
      prevWombat: wombat
    }
    // Send the action
    store.dispatch(action)
  }

  return (

    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <> <li key={wombat}>{wombat}</li><button onClick={() => deleteWombat(wombat)}>Delete</button>
        
           <form onSubmit={e => updateWombat(e, wombat)}>
          <input 
            type="text" name="updWombat" ></input>
          <button >Update Name</button>
        </form></>)}
      </ul>

         <form onSubmit={e => addWombat(e)}>
          <input placeholder="New Wombat"
            type="text" name="newWombat" ></input>
          <button >Add Wombat</button>
        </form>

    </div>

  )
}

export default Wombats
