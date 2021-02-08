export const ADD_WOMBAT = 'ADD_WOMBAT'
export const DEL_WOMBAT = 'DEL_WOMBAT'
export const UPDATE_WOMBAT = 'UPDATE_WOMBAT'


export function addWombat (wombat){
  return {
      type: 'ADD_WOMBAT',
      wombat: wombat
  }}

export function deleteWombat (wombat){
    return {
        type: 'DEL_WOMBAT',
        wombat: wombat
    }}

export function updateWombat (wombat, newWombat){
      return {
          type: 'UPDATE_WOMBAT',
          wombat: wombat,
          newWombat: newWombat
      }}
    



