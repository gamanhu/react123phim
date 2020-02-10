import * as ActionTypes from "../constants/action-types";

let initialState= {
    listMovie:[],
    movie : {},
    danhSachCacRap : []
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_LIST_MOVIE:
            state.listMovie = action.listMovie;
            console.log(action.listMovie);
            return { ...state };

        case ActionTypes.GET_DETAIL_MOVIE: 
            state.movie=action.movie;
            return {...state};
        case ActionTypes.GET_CINEMA:
            state.danhSachCacRap = action.danhSachCacRap;
            return {...state};
        default:
            return { ...state };
    }
};
export default movieReducer;
