import {createStore} from "redux";
import numberReducer from "../Reducers/reducers.js";


const store = createStore(numberReducer)

export default store