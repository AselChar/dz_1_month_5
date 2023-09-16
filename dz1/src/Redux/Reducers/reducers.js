import {ADD_NUMBER, CLEAR_LIST} from "../Actions/actions.js";


const InitialState= {
    numbers:[]
}

const numberReducer = (state=InitialState, action)=> {
    switch (action.type){
        case ADD_NUMBER:
            return {
                ...state, numbers: [...state.numbers, action.payload]
            }
        case CLEAR_LIST:
            return {
                ...state, numbers: []
            }
        default:
            return state
    }
}

export default numberReducer
