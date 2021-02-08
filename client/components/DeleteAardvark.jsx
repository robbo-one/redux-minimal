import React from 'react'
import { deleteAardvark } from '../actions'

export const DeleteAardvark = (props) => {
  const store = props.store

  const clickHandler = (aardvark) => {
    store.dispatch(deleteAardvark(aardvark))
  }
  return (
    <button onClick={() => clickHandler(props.aardvark)}>Delete</button>
  )
}