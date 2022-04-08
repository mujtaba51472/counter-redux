import { combineReducers  } from "redux";
import counterReducer from "./counter/counterReducer";
const rootReducer = combineReducers({
    count: counterReducer
})
export default rootReducer