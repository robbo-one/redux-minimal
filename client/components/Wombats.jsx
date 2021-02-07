import React, { useState } from 'react'



function Wombats (props) {
  const store = props.store
  const state = store.getState()
  const wombats = state.wombats

const [formData, setFormData]
= useState({})

const handleChange = (event) => {
  event.persist()
  setFormData(currentData => {
    return { 
      ...currentData,
      [event.target.name]: event.target.value
      }
  })
}

  const handleSubmit = (event, wombat) => {
    event.preventDefault()
    const action = {
      type: 'UPDATE_WOMBAT',
      wombat:  wombat,
      newWombat:  event.target.updated.value
   }
    store.dispatch(action)
  
}

const handleDelete =(event, wombat) => {
  event.preventDefault()
  const action = {
    type: 'DEL_WOMBAT',
    wombat: wombat
  }
  store.dispatch(action)
}

const handleAdd =(event) => {
  console.log(formData)
  event.preventDefault()
  const action ={
    type: 'ADD_WOMBAT',
    wombat: formData.wombat
  }
  store.dispatch(action)
}


  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) =>
         <li key={wombat}>{wombat}
         <form onSubmit={(event) => handleSubmit(event, wombat)}>
       <label>
          Update Wombat:
          <input type="text" name ='updated'/>
          </label>
          <button>Submit</button> 
           </form>
         <button  onClick={(event) => handleDelete(event,wombat)}>Delete</button> 
        </li>)} 
      </ul>

      {/* <form onSubmit={handleSubmit}>
       <label>
          Update Wombat:
          <input type="text" name ='updated' onChange={(event) => handleChange(event)}/>
          </label>
          <button>Submit</button> 
           </form> */}

           <form onSubmit={handleAdd}>
       <label>
          Add a Wombat:
          <input type="text" name ='wombat' onChange={(event) => handleChange(event)}/>
          </label>
          <button>Submit</button> 
           </form>
    </div>
    
  )
}
//create the action
//const addWombat = () {
  // const action = {
  //   type : ADD_WOMBAT',
  //   wombat: 'Prunella'
  
  // }
  // send the action
//   store.dispatch action
// }

// <button OnClick={}>Prunella</button>

export default Wombats


