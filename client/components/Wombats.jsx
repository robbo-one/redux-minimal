import React, { useState } from 'react'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  const [formData, setFormData] = useState({})

  const handleChange = (event) => {
    event.persist()
    setFormData(currentData => {
      return {
        ...currentData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event, wombat) => {
    event.preventDefault()
    const action = {
      type: 'UPDATE_WOMBAT',
      wombat: wombat,
      newWombat: event.target.newWombat.value
    }
    store.dispatch(action)
  }

  const handleDelete = (event, wombat) => {
    event.preventDefault()
    const action = {
      type: 'DEL_WOMBAT',
      wombat: wombat
    }
    store.dispatch(action)
  }

  const addWombat = (event) => {
    event.preventDefault()
    const action = {
      type: 'ADD_WOMBAT',
      wombat: formData.wombat
    }
    store.dispatch(action)
  }

  return (
    <div className='center'>
      <div className='container'>
        <h1>Wombats</h1>

        <ul>
          {wombats.map((wombat) => 
          <li key={wombat}>{wombat}
            <form onSubmit={(event) => handleSubmit(event, wombat)}>
              <label>
                Update Wombat:
                <input type='text' name='newWombat' />
              </label>
              <button>Submit</button>
            </form>
            <button onClick={(event) => handleDelete(event, wombat)}>Delete</button>
          </li>)}
        </ul>
        
        <div className='wombat-container'>
          <form onSubmit={addWombat}>
          <label>
              Add Wombat:
              <input type='text' name='wombat' onChange={(event) => handleChange(event)} />
            </label>
            <button>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Wombats
