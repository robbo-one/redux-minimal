import React, {useState, useEffect} from 'react'
import {addWombat, deleteWombat, updateWombat} from '../actions/index'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats
  
  const del = (wombat) => {
    store.dispatch(deleteWombat(wombat))
  }

  const add = (wombat) => {
    store.dispatch(addWombat(wombat))
  }

  const update = (wombat) => {
    store.dispatch(updateWombat(wombat))
  }

  
  const [theWombat, setTheWombat] = useState('')
  
  const handleChange = (e) => {
    setTheWombat(e.target.value)

  }

  return (
    <div>
      <h1>Wombats and Aardvarks</h1>
      <div>
        <ul>
          {wombats.map((wombat) => {
          return <li key={wombat}
          >{wombat}
            <button onClick={() => del(wombat)}>delete</button>
            <form>
              <label>update wombat</label>
              <input type="text" name='name' onChange={handleChange}/>
              <button onClick={() => update(wombat, theWombat)} type='button'>update</button>
            </form>
          </li>})}

          <br></br>

          <h4>add a wombat</h4>
          <form>
            <label>wombat name</label>
            <input type='text' name='name' onChange={handleChange}/>
            <button onClick={() => add(theWombat)} type='button'>submit</button>
          </form>
        </ul>
      </div>
    </div>
  )
}

export default Wombats
