import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' // import this to use REdux
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers,//we call it here, store has the event bus 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}> 
                                {/* // By wrapping App in <Provider> ... </Provider> everything in app will know about redux. */}
    <App />
    </Provider>,
    document.getElementById('app')
  )
})


