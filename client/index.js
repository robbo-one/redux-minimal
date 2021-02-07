import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './components/App'
import rootReducer from './reducer'

const store = createStore(rootReducer,
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
