import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import cinemaBrandReducer from "./cinemaBrandReducer";
const rootReducer = combineReducers({
    movieReducer, //movieReducer:movieReducer
    cinemaBrandReducer
});
export default rootReducer;