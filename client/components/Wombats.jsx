import React from 'react'
import wombatReducer from '../reducer'

function Wombats (props) {
  console.log(props)

  const {store} = props
  const state = store.getState()
  //getState returns the current state tree of your application. It's equal to the last value returned by the store's reducer.
  const wombats = state.wombats

  function deleteWombat (wombat) {
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    store.dispatch(action)
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}   
        <button onClick={() => deleteWombat(wombat)} >Delete</button>
         
         </li>)}  
      </ul>
    </div>
  )
}

export default Wombats
