import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import cinemaBrandReducer from "./cinemaBrandReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
    movieReducer, //movieReducer:movieReducer
    cinemaBrandReducer,
    userReducer
});
export default rootReducer;