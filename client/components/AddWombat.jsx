import React from 'react'
import { addWombat } from '../actions'


export const AddWombat = (props) => {
  const store = props.store

  const submitHandler = (evt) => {
    evt.preventDefault()
    store.dispatch(addWombat(evt.target.newWombat.value))
  }

  return(
    <form onSubmit={submitHandler}>
    <label>
      Add a Wombat! <br></br>
      <input type="text" name="newWombat" placeholder="new wombat"></input>
    </label>
    <button>Add!</button>
  </form>
  )
}