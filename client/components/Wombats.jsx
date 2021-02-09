import React from 'react'
import { connect } from 'react-redux'
import { delWombat } from '../actions'


function Wombats (props) {
  // Old redux connection code,
  // Without react-redux connect and mapStateProps
  // const store = props.store
  // const state = store.getState()
  // const wombats = state.wombats
  
  const wombats = props.wombats

  const del = (wombat) => {
    props.dispatch(delWombat(wombat))
  }
  
  

  return (
    <div>
      <h1>Wombats</h1>
      <ul>
        {wombats.map((wombat) => (
          <li key={wombat}>
            {wombat} 
            <button onClick={() => del(wombat)}>x</button>
            {/* <input name="newName" placeholder={wombat}/> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

function mapStateToProps(globalState) {
return { 
  wombats: globalState.wombats
}

}

export default connect(mapStateToProps)(Wombats)







// const [formData, setFormData]
// = useState({})

// const handleChange = (event) => {
//   event.persist()
//   setFormData(currentData => {
//     return { 
//       ...currentData,
//       [event.target.name]: event.target.value
//       }
//   })
// }

//   const handleSubmit = (event, wombat) => {
//     event.preventDefault()
//     const action = {
//       type: 'UPDATE_WOMBAT',
//       wombat:  wombat,
//       newWombat:  event.target.updated.value
//    }
//     store.dispatch(action)
  
// }

// const deleteWombat =(event, wombat) => {
//   event.preventDefault()
//   const action = {
//     type: 'DEL_WOMBAT',
//     wombat: wombat
//   }
//   store.dispatch(action)
// }

// const addWombat =(event) => {
//   console.log(formData)
//   event.preventDefault()
//   const action ={
//     type: 'ADD_WOMBAT',
//     wombat: formData.wombat
//   }
//   store.dispatch(action)
// }



      
           {/* <form onSubmit={handleAdd}>
       <label>
          Add a Wombat:
          <input type="text" name ='wombat' onChange={(event) => addWombat(event)}/>
          </label>
          <button>Submit</button> 
           </form>

           <AddWombat /> */}
    
    
 

{/* <form onSubmit={handleSubmit}>
       <label>
          Update Wombat:
          <input type="text" name ='updated' onChange={(event) => handleChange(event)}/>
          </label>
          <button>Submit</button> 
           </form> */}



//create the action
//const addWombat = () {
  // const action = {
  //   type : ADD_WOMBAT',
  //   wombat: 'Prunella'
  
  // }
  // send the action
//   store.dispatch action
// }

// <button OnClick={}>Prunella</button>




