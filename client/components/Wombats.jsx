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

  const handleSubmit = (event) => {
    event.preventDefault()
    const action = {
      type: 'UPDATE_WOMBAT',
      wombat: 'Gertrude',
      newWombat: 'Gerty'
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

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}<button onClick={(event) => handleDelete(event, wombat)}>Delete</button></li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Update Wombat:
          <input type='text' name='newWombat' onChange={(event) => handleChange(event)} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Wombats
