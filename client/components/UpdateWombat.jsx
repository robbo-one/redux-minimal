import React, { useState } from 'react'


function UpdateWombat (props) {
  const [updatedWombat, setUpdatedWombat] = useState('')

  const handleChange = (event) => {
    setUpdatedWombat(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const action = {
        type: "UPDATE_WOMBAT",
        oldName: props.wombat,
        newName: updatedWombat,
      };
    console.log(action)
    props.store.dispatch(action)
    setUpdatedWombat('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Update A Wombat
        <input type="text" name="name" onChange={handleChange}
         value={updatedWombat}/>
      </label>
      <button>Update to New Name</button>
    </form>
  )
}

export default UpdateWombat