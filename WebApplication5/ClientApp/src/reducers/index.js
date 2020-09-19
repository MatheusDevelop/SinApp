import { combineReducers } from "redux";
import TextReducer from './textReducer'

export default combineReducers({
    text:TextReducer
})