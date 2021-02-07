import React from 'react'

function Wombats (props) {
  console.log(props)

  const {store} = props
  const state = store.getState()
  //getState returns the current state tree of your application. It's equal to the last value returned by the store's reducer.
  const wombats = state.wombats
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => <li key={wombat}>{wombat}</li>)}
      </ul>
      {/* <button onClick={() => {
        const action = {
          type: 'ADD_WOMBAT',
          wombat: 'Hannah'
        }
        store.dispatch(action)
      }}>Click me!</button> */}
    </div>
  )
}

export default Wombats
