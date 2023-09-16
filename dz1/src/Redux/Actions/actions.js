export const ADD_NUMBER = 'ADD_NUMBERS'
export const CLEAR_LIST = 'CLEAR_LIST'

export const addnumber = (number)=>(
    {
        type: ADD_NUMBER,
        payload: number
    }
)

export const clearlist = ()=>({
    type: CLEAR_LIST
})