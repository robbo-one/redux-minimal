

export function addWombat(wombat) {
  return ({
    type: 'ADD_WOMBAT',
    wombat: wombat
  })
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