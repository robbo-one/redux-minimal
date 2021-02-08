import React, { useState } from 'react'
import { addWombat } from '../actions'


const AddWombat = (props) => {
  const {store} = props

  const [ formData, setFormData ] = useState('')

  const addingWombat = (e) => {
    e.preventDefault()
    const action = addWombat(formData)
    store.dispatch(action)
    setFormData('')
  } 

  const handleChange = (event) => {
    setFormData(event.target.value)
  }


  return (
    <form onSubmit={(e) => addingWombat(e)}> 
      <label>
        Enter the new wombat's name: 
        <input tpye='text' onChange={handleChange} name='wombat' />
      </label>
      <input type='submit' value='add this Wombat!' />
    </form>
  )

}

export default AddWombat