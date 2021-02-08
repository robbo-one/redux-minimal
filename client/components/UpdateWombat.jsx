import React from "react"
import { updateWombat } from "../actions"

export const UpdateWombat = (props) => {
  const store = props.store

  const submitHandler = (wombat, evt) => {
    evt.preventDefault()
    store.dispatch(updateWombat(wombat, evt.target.newWombat.value))
  }

  return (
    <form onSubmit={(evt) => submitHandler(props.wombat, evt)}>
      <label>
        Update {props.wombat}:
        <input type="text" name="newWombat" placeholder="new name"></input>
      </label>
      <button>Update!</button>
    </form>
  )
}
