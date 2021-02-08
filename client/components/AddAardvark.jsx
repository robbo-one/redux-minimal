import React, { useState } from 'react'
import { addAnimal } from '../actions'


const AddAardvark = (props) => {
  const {store} = props

  const [ formData, setFormData ] = useState('')

  const addingAardvark = (e) => {
    e.preventDefault()
    const action = addAnimal('aardvark', formData)
    // console.log(action)
    store.dispatch(action)
    setFormData('')
  } 

  const handleChange = (event) => {
    setFormData(event.target.value)
  }


  return (
    <form onSubmit={(e) => addingAardvark(e)}> 
      <label>
        Enter the new Aardvark's name: 
        <input tpye='text' onChange={handleChange} name='Aardvark' />
      </label>
      <input type='submit' value='add this Aardvark!' />
    </form>
  )

}

export default AddAardvark