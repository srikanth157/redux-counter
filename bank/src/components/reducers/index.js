import  reducer  from "../reducers/reducer";
import { combineReducers } from "redux";

const reducers=combineReducers({
    amount:reducer,
})

export default reducers