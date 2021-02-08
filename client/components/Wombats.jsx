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
    e.target.newWombat.value = ""
  }

  function updateWombat(e, wombat) {
    e.preventDefault()
    // console.log(e.target.updatedWombat.value)
    const action = {
      type: 'UPDATE_WOMBAT',
      newWombat: e.target.updatedWombat.value,
      oldWombat: wombat
    }
    
    store.dispatch(action)
    e.target.updatedWombat.value = ""
  }
  
  console.log(state)

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}
          <button onClick={() => deleteWombat(wombat)}>Delete</button>

          <form onSubmit={(e) => updateWombat(e, wombat)}>
            <input type='text' name='updatedWombat'></input>
            <button type='submit'>Submit</button>
          </form>

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