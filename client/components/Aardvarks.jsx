import React from 'react'
import { AddAardvark } from './AddAardvark'
import { DeleteAardvark } from './DeleteAardvark'
import { UpdateAardvark } from './UpdateAardvark'

function Aardvarks(props){
  const { store } = props
  const state = store.getState()
  const aardvarks = state.aardvarks

  return (
    <div>
      <h1>Aardvarks</h1>
      <ul>
        {aardvarks.map((aardvark) => (
          <li key={aardvark}>
            {aardvark}{" "}
            <DeleteAardvark store={store} aardvark={aardvark}/>
            <UpdateAardvark store={store} aardvark={aardvark}/>
          </li>
        ))}
      </ul>
      <AddAardvark store={store}/>
    </div>
  )
}

export default Aardvarks