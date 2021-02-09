

export const ADD_WOMBAT = 'ADD_WOMBAT'
export const DEL_WOMBAT = 'DEL_WOMBAT'

export function addWombat(wombat) {
  return {
    type: ADD_WOMBAT,
    wombat: wombat
  }
}

export function delWombat(wombat) {
  return {
    type: DEL_WOMBAT,
    wombat: wombat
  }
}