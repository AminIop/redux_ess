import { combineReducers } from "redux";
import Counter from "./counter"
import StoreTypes from "../constants/storeTypes";

export default combineReducers({
    [StoreTypes.COUNTER]: Counter
})