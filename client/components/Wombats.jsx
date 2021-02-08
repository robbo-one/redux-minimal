import React from 'react'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  function deleteWombat(wombat) {
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    store.dispatch(action) 
  }

  function addWombat(e) {
    e.preventDefault()
    const action = {
      type: 'ADD_WOMBAT',
      wombat: e.target.newWombat.value
    }
    store.dispatch(action)
    
  }

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}
          <button onClick={() => deleteWombat (wombat)}>Delete</button>
        </li>)}
        <form onSubmit={addWombat}>
          <input type='text' name='newWombat'></input>
          <button type='submit'>Add wombat</button>
        </form>
      </ul>
    </div>
  )
}

export default Wombats