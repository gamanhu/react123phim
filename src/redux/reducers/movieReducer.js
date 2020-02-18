import * as ActionTypes from "../constants/action-types";

let initialState= {
    listMovie:[],
    movie : {},
    danhSachCacRap : [],
    listLogo : []
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
            let danhSachCacRap = [...state.danhSachCacRap];
            danhSachCacRap.push(action.danhSachCacRap);
            state.danhSachCacRap =danhSachCacRap;
            return {...state};
        case ActionTypes.GET_LOGO_CINEMA:
            // console.log(action);
            state.listLogo = action.listLogo;
            return {...state};
        default:
            return { ...state };
    }
};
export default movieReducer;
