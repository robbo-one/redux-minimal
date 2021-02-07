import React from "react";
//4= store can be seen in props object. Props is an object that has store
//component accepts user input
function Wombats(props) {
  const { store } = props; //component grabs store out of props
  const state = store.getState();
  console.log(state)
  //getState returns the current state tree of your application. It's equal to ???
  const wombats = state.wombats;
  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => (
          <li key={wombat}>{wombat}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          const action = {
            type: "ADD_WOMBAT",
            wombat: "Hannah",
          };
          store.dispatch(action);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Wombats;
