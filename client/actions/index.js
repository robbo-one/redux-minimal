

export function addAnimal (animal, newAnimal) {
  const dispatch = {
    type: 'ADD_' + animal.toUpperCase()
  }
  dispatch[animal] = newAnimal
  console.log(dispatch)
  return dispatch
}

export function addWombat (wombat) {
  return {
    type: 'ADD_WOMBAT',
    wombat: wombat
  }
}

export function delWombat(wombat) {
  return ({
    type: 'DEL_WOMBAT',
    wombat: wombat
  })
}

export function updateWombat(wombat, newName) {
  return ({
    type: 'UPDATE_WOMBAT',
    wombat: wombat,
    newName: newName
  })
}