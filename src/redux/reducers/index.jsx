import { combineReducers } from "redux";
import loginReducer from "./Login";

const rootReducer = combineReducers({
   loginReducer,
})

export default rootReducer