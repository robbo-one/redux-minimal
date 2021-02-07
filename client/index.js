import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers } from 'redux'

import App from './components/App'
// import wombatReducer from './reducer'
import aardvarkReducer from './areducer'

const store = createStore(wombatReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('app')
  )
}
