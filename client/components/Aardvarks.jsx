import React from 'react'

function Aardvarks (props) {
    const {store} = props
    const state = store.getState()
    const aardvarks = state.aardvarks
}

return (
    <div>
        <h1>Aardvarks!</h1>
        <ul>
        {aardvarks.map((aardvark) => <li key={aardvark}>{aardvark}
        </li>
        )}
        </ul>
    </div>
)

export default Aardvarks