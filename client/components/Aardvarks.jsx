import React, { useState } from 'react'
import { addAardvark, delAardvark, updateAardvark } from '../actions'

function Aardvarks (props) {
  const {store} = props
  const state = store.getState()
  const aardvarks = state.aardvarks

  const [formData, setFormData] = useState('')

  const handleChange = (event) => {
    event.persist()
    setFormData(currentData => {
      return {
        ...currentData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleUpdate = (event, aardvark) => {
    event.preventDefault()

    const action = updateAardvark(aardvark, formData.newAardvark)
    props.store.dispatch(action)
    
    // const action = {
    //   type: 'UPDATE_AARDVARK',
    //   aardvark: aardvark,
    //   newAardvark: event.target.newAardvark.value
    // }
  }

  const handleDelete = (event, aardvark) => {
    event.preventDefault()

    const action = delAardvark(aardvark)
    props.store.dispatch(action)

    // const action = {
    //   type: 'DEL_AARDVARK',
    //   aardvark: aardvark
    // }
  }

  const handleAdd = (event) => {
    event.preventDefault()

    const action = addAardvark(formData.aardvark)
    props.store.dispatch(action)
    setFormData('')
    
    // const action = {
    //   type: 'ADD_AARDVARK',
    //   aardvark: formData.aardvark
    // }
  }

  return (
    <div className='center'>
      <div className='container'>
        <h1>Aardvarks</h1>

        <ul>
          {aardvarks.map((aardvark) => 
          <li key={aardvark}>{aardvark}
            <form onSubmit={(event) => handleUpdate(event, aardvark)}>
              <label>
                Update Aardvark:
                <input type='text' name='newAardvark' onChange={(event) => handleChange(event)} />
              </label>
              <button>Submit</button>
            </form>
            <button onClick={(event) => handleDelete(event, aardvark)}>Delete</button>
          </li>)}
        </ul>
        
        <div className='wombat-container'>
          <form onSubmit={handleAdd}>
          <label>
              Add Aardvark:
              <input type='text' name='aardvark' onChange={(event) => handleChange(event)} />
            </label>
            <button>Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Aardvarks