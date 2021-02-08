import React from 'react'
import { addAardvark } from '../actions'

export const AddAardvark = (props) => {
  const store = props.store

  const submitHandler = (evt) => {
    evt.preventDefault()
    store.dispatch(addAardvark(evt.target.newAardvark.value))
  }

  return (
    <form onSubmit={submitHandler}>
        <label>
          Add an Aardvark! <br></br>
          <input type="text" name="newAardvark" placeholder="new aardvark"></input>
        </label>
        <button>Add!</button>
      </form>
  )
}