import React, { useState } from 'react'


function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

const deleteWombat = (wombat) => {
  const action = {
    type: 'DEL_WOMBAT',
    wombat: wombat
  }
  store.dispatch(action)
}

const [newWombat, setNewWombat] = useState(null)
const handleChange = (evt) => {
  setNewWombat(evt.target.value) 
}

const addWombat = (evt) => {
  evt.preventDefault ()
  const wombat = newWombat
  const action = {
    type: 'ADD_WOMBAT',
    wombat: wombat
  }
  console.log(action)
  store.dispatch(action)
}

const updateWombat = (evt) => {
  evt.preventDefault ()
  const wombat = newWombat
  const action = {
    type: 'UPDATE_WOMBAT',
    wombat: wombat
  }
  console.log(action)
  store.dispatch(action)
}




  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}
        <br/>
        <br/>
        <button onClick={()=> deleteWombat(wombat)}>Delete this Wombat</button>
        <form onSubmit={
          updateWombat } >
          <p>Update this Wombat</p>
          <input type= ''
          onChange={handleChange}/>
        </form>

        </li>)}

        <form onSubmit={
          addWombat } >
          <p>Add a Wombat</p>
          <input type= ''
          onChange={handleChange}/>
        </form>



       
      </ul>
    </div>
  )
}

export default Wombats
