import React from "react";
import AddWombat from "./AddWombat";

//4= store can be seen in props object. Props is an object that has store
//component accepts user input
function Wombats(props) {
  const { store } = props; //component grabs store out of props
  const state = store.getState(); //getstate returns current state tree of app
  console.log(state);
  const wombats = state.wombats;

  const del = (wombat) => {
    console.log(wombat);
    const action = {
      type: "DEL_WOMBAT",
      wombat: wombat,
    };
    store.dispatch(action);
  };

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => (
          <li key={wombat}>
            {wombat}
            <button onClick={() => del(wombat)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddWombat store={store} />
    </div>
  );
}

export default Wombats;
