import React, {useState, useEffect} from 'react'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats
  const aardvarks = state.aardvarks

  const deleteWombat = (wombat) => {
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    store.dispatch(action)
  }

  const addWombat = (wombat) => {
    const action = {
        type: 'ADD_WOMBAT',
        wombat: wombat
    }
  
    store.dispatch(action)
  }

  const updateWombat = (wombat, newWombat) => {
    const action = {
        type: 'UPDATE_WOMBAT',
        wombat: wombat,
        newWombat: newWombat
    }
    store.dispatch(action)
  }

  const [theWombat, setTheWombat] = useState('')
  
  const handleChange = (e) => {
    setTheWombat(e.target.value)

  }

  return (
    <div>
      <h1>Wombats and Aardvarks</h1>
      {/* <div>
        <ul>
          {aardvarks.map((aardvark) => {
            return <li key={aardvark}
            >{aardvark}
            </li>
          })}
        </ul>
      </div> */}
      <div>
        <ul>
          {wombats.map((wombat) => {
          return <li key={wombat}
          >{wombat}
            <button onClick={() => deleteWombat(wombat)}>delete</button>
            <form>
              <label>update wombat</label>
              <input type="text" name='name' onChange={handleChange}/>
              <button onClick={() => updateWombat(wombat, theWombat)} type='button'>update</button>
            </form>
          </li>})}

          <br></br>

          <h4>add a wombat</h4>
          <form>
            <label>wombat name</label>
            <input type='text' name='name' onChange={handleChange}/>
            <button onClick={() => addWombat(theWombat)} type='button'>submit</button>
          </form>
        </ul>
      </div>
    </div>
  )
}

export default Wombats
