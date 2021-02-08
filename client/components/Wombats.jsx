//This component is the starting point of the app and renders stuff at the bottom

import React from "react";
import AddWombat from "./AddWombat";
import UpdateWombat from "./UpdateWombat";

//4= store can be seen in props object. Props is an object that has store
//component accepts user input
function Wombats(props) {
  const { store } = props; //component grabs store out of props
  const state = store.getState(); //getstate returns current state tree of app
  console.log(state);
  const wombats = state.wombats;

  const del = (wombat) => {
    //function fires when user clicks delete button for that wombat
    console.log(wombat);
    const action = {
      type: "DEL_WOMBAT",
      wombat: wombat,
    };
    store.dispatch(action); //action del wombat sent to reducer
  };

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => (
          <li key={wombat}>
            {wombat}
            <button onClick={() => del(wombat)}>Delete</button>
            <UpdateWombat wombat={wombat} store={store} />
          </li>
        ))}
      </ul>
      <AddWombat store={store} />
    </div>
  );
}

export default Wombats;
