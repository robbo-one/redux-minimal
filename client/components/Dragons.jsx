import React from 'react'

function Dragons (props) {
  const {store} = props
  const state = store.getState()
  const dragons = state.dragons

  const deleteDragon = (dragon) => {
    store.dispatch({
      type: 'DEL_DRAGON',
      dragon: dragon
    })
  }

  const addDragon = (evt) => {
    evt.preventDefault()
    store.dispatch({
      type: 'ADD_DRAGON',
      dragon: evt.target.newDragon.value
    })
  }
  
  const updateDragon = (dragon, evt) => {
    evt.preventDefault()
    store.dispatch({
    type: 'UPDATE_DRAGON',
    olddragon: dragon,
    newDragon: evt.target.newDragon.value
    })
  }

  return (
    <div>
      <h1>Dragons</h1>
      <ul>
        {dragons.map((dragon) => (<li key={dragon}>{dragon}
        <br/>
          <button onClick={() => deleteDragon(dragon)}>Delete</button>
            <form onSubmit={(evt) => updateDragon(dragon, evt)}>
              <label> 
                <input
                  type="text"
                  name="newDragon"
                  placeholder="Update">
                </input>
              </label>
              <button>Update</button>
            </form>
          </li>
        ))}
      </ul>
    
    
    <form onSubmit={addDragon}>
      <label>
        Add a Dragon! <br/>
        <input type="text" name="newDragon" placeholder="Name a Daragon"></input>
      </label>
      <button>Add!</button>
    </form>
  </div>
)
}

export default Dragons
