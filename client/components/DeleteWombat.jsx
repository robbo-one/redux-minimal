import React from 'react'
import { deleteWombat } from '../actions'

export const DeleteWombat = (props) => {
  const store = props.store

  const clickHandler = (wombat) => {
    store.dispatch(deleteWombat(wombat))
  }
  
  return (
    <button onClick={() => clickHandler(props.wombat)}>Delete</button>
  )
}