import { combineReducers } from "redux";
import CartReducer from "./CartReducer";



export default combineReducers({
    cartItems: CartReducer // holds the data and being assigned to cartItems
});