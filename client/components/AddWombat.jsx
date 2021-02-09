import React, { useState } from 'react'
import { addWombat } from '../actions'

function AddWombat (props) {
  const [newWombat, setNewWombat] = useState('')

  const handleChange = (event) => {
    setNewWombat(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const action = addWombat(newWombat)
    console.log(action)
    props.store.dispatch(action)
    setNewWombat('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Wombat
        <input type="text" name="name" onChange={handleChange} value={newWombat}/>
      </label>
      <button>Save</button>
    </form>
  )
}

export default AddWombat