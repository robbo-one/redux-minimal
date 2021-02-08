import React, { useState } from 'react'
import { addWombat, delWombat, updateWombat } from '../actions'

function Wombats (props) {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  const [formData, setFormData] = useState('')

  const handleChange = (event) => {
    event.persist()
    setFormData(currentData => {
      return {
        ...currentData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleUpdate = (event, wombat) => {
    event.preventDefault()

    const action = updateWombat(wombat, formData.newWombat)
    props.store.dispatch(action)

    // const action = {
    //   type: 'UPDATE_WOMBAT',
    //   wombat: wombat,
    //   newWombat: event.target.newWombat.value
    // }
  }

  const handleDelete = (event, wombat) => {
    event.preventDefault()

    const action = delWombat(wombat)
    props.store.dispatch(action)

    // const action = {
    //   type: 'DEL_WOMBAT',
    //   wombat: wombat
    // }
  }

  const handleAdd = (event) => {
    event.preventDefault()

    const action = addWombat(formData.wombat)
    props.store.dispatch(action)
    setFormData('')
    
    // const action = {
    //   type: 'ADD_WOMBAT',
    //   wombat: formData.wombat
    // }
  }

  return (
    <div className='center'>
      <div className='container'>
        <h1>Wombats</h1>

        <ul>
          {wombats.map((wombat) => 
          <li key={wombat}>{wombat}
            <form onSubmit={(event) => handleUpdate(event, wombat)}>
              <label>
                Update Wombat:
                <input type='text' name='newWombat' onChange={(event) => handleChange(event)} />
              </label>
              <button>Submit</button>
            </form>
            <button onClick={(event) => handleDelete(event, wombat)}>Delete</button>
          </li>)}
        </ul>
        
        <div className='wombat-container'>
          <form onSubmit={handleAdd}>
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