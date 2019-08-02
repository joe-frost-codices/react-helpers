import C from "./constants"

export function addDay (resort, date, powder=false, backcountry=false) {
  return {
    type: C.ADD_DAY,
    payload: {resort,date,powder,backcountry}
  }
}

export const removeDay = (date) => ({
    type: C.REMOVE_DAY,
    payload: date
})
