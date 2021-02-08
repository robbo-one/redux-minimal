export const ADD_WOMBAT = 'ADD_WOMBAT'
export const DEL_WOMBAT = 'DEL_WOMBAT'
export const UPDATE_WOMBAT = 'UPDATE_WOMBAT'

export const ADD_AARDVARK = 'ADD_AARDVARK'
export const DEL_AARDVARK = 'DEL_AARDVARK'
export const UPDATE_AARDVARK = 'UPDATE_AARDVARK'

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

export function updateWombat(wombat, newWombat) {
  return {
  type: UPDATE_WOMBAT,
  wombat: wombat,
  newWombat: newWombat
  }
}

export function addAardvark(aardvark) {
  return {
    type: ADD_AARDVARK,
    aardvark: aardvark
  }
}

export function delAardvark(aardvark) {
  return {
    type: DEL_AARDVARK,
    aardvark: aardvark
  }
}

export function updateAardvark(aardvark, newAardvark) {
  return {
  type: UPDATE_AARDVARK,
  aardvark: aardvark,
  newAardvark: newAardvark
  }
}