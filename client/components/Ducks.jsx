import React, { useState } from 'react'


function Ducks (props) {
  const {store} = props
  const state = store.getState()
  const ducks = state.ducks

const deleteDuck = (duck) => {
  const action = {
    type: 'DEL_DUCK',
    duck: duck
  }
  store.dispatch(action)
}

const [newDuck, setNewDuck] = useState(null)
const handleChange = (evt) => {
  setNewDuck(evt.target.value) 
}

const addDuck = (evt) => {
  evt.preventDefault ()
  const duck = newDuck
  const action = {
    type: 'ADD_DUCK',
    duck: duck
  }
  console.log(action)
  store.dispatch(action)
}

const updateDuck = (evt, duck) => {
  evt.preventDefault ()
  const action = {
    type: 'UPDATE_DUCK',
    duck: duck,
    newDuck: newDuck
  }
  console.log(action)
  store.dispatch(action)
}asdasdasd


  return (
    <div>
      <h1>Ducks</h1>
      <ul>
        {ducks.map((duck) => <li key={duck}>{duck}
        <br/>
        <br/>
        <button onClick={()=> deleteDuck(duck)}>Delete this Duck</button>

        <form onSubmit={ (evt) =>
          updateDuck(evt, duck)} >
          <p>Update this Duck</p>
          <input type= ''
          onChange={handleChange}/>
        </form>

        </li>)}

        <form onSubmit={
          addDuck} >
          <p>Add a Duck</p>
          <input type= ''
          onChange={handleChange}/>
        </form>



       
      </ul>
    </div>
  )
}

export default Ducks
