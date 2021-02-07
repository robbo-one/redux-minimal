import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './components/App'
import wombatReducer from './reducer'

//1=Store created and is made out of reducers
const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
//2=render called and App has its store as what was set above
document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  ReactDOM.render(
    <App store={store} />,//3We are telling App there is a thing called Store. Jump to component 
    document.getElementById('app')
  )
}
