import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import cinemaBrandReducer from "./cinemaBrandReducer";
import userReducer from "./userReducer";
import bookingReducer from "./bookingReducer";
const rootReducer = combineReducers({
    movieReducer, //movieReducer:movieReducer
    cinemaBrandReducer,
    userReducer,
    bookingReducer
});
export default rootReducer;