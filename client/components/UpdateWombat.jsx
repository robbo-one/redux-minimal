import React, { useState } from 'react'
import { updateWombat } from '../actions'

const UpdateWombat = (props) => {
  const {store} = props
  const state = store.getState()
  const wombats = state.wombats

  const [ updateForm, setUpdateForm ] = useState(false)
  const [ formData, setFormData] = useState('')

  const showForm = () => {
    setUpdateForm(!updateForm)
  }

  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  const updatingWombat = (e, wombat) => {
    e.preventDefault()
    store.dispatch(updateWombat(wombat, formData))
    setFormData('')
  } 

  return (
      <>
        <button onClick={showForm}>
          { updateForm ? "hide" : "update" }
        </button>
        { updateForm && 
          <form onSubmit={(e) => updatingWombat(e, props.wombat)}>
            <label>
              Enter New Name:
              <input type='text' 
                onChange={(e) => handleChange(e)} 
                placeholder={props.wombat}
              /> 
            </label>
            <input type='submit' value='update the wombat' />
          </form> }
      </>
  )
}

export default UpdateWombat