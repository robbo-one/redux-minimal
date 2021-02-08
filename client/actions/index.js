export const ADD_WOMBAT = "ADD_WOMBAT"

export function addWombat (wombat) {
    return {
        type: ADD_WOMBAT,
        wombat: wombat
    }
}