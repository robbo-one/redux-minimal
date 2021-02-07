import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' // import this to use REdux

import App from './components/App'
import wombatReducer from './reducer'

const store = createStore(wombatReducer,//we call it here, store has the event bus 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render) // this subscribes to changes and anytime something changes, it calls the render function below and renders the page again
})

function render () {
  ReactDOM.render(
    <App store={store} />, //REdux is the store
    document.getElementById('app')
  )
}
