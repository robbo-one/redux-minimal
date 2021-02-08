import React from "react"
import { updateAardvark } from '../actions'

export const UpdateAardvark = (props) => {
  const store = props.store

  const submitHandler = (aardvark, evt) => {
    evt.preventDefault()
    store.dispatch(updateAardvark(aardvark, evt.target.newAardvark.value))
  }

  return (
    <form onSubmit={(evt) => submitHandler(props.aardvark, evt)}>
      <label>
        Update {props.aardvark}:
        <input type="text" name="newAardvark" placeholder="new name"></input>
      </label>
      <button>Update!</button>
    </form>
  )
}
