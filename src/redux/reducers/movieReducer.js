import * as ActionTypes from "../constants/action-types";

let initialState = {
    listMovie: [],
    movie: {},
    danhSachCacRap: [],
    listLogo : []
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_LIST_MOVIE:
            state.listMovie = action.listMovie;
            // console.log(action.listMovie);
            return { ...state };
        // case ActionTypes.GET_DETAIL_MOVIE: 
        // state.movie=action.movie;
        //     return {...state};
        case ActionTypes.ADD_MOVIE_SUCCESS:
            let movie = [...state.listMovie, action.movie];
            state.listMovie = [];
            return { ...state };
        case ActionTypes.UPDATE_MOVIE_SUCCESS:
            let movie1 = [...state.listMovie];
            let index = state.listMovie.findIndex(item => item.maPhim = action.movie.maPhim);
            if (index !== -1) {
                movie1[index] = action.movie;
            }
            state.listMovie = [];
            return { ...state };
        case ActionTypes.DELETE_MOVIE_SUCCESS:
            let movie2 = [...state.listMovie];
            let index2 = state.listMovie.findIndex(item => item.maPhim = action.maPhim);
            if (index !== -1) {
                movie2.splice(index2, 1);
            }
            state.listMovie = [];
            return { ...state };
        // Huy viet
        case ActionTypes.GET_DETAIL_MOVIE:
            state.movie = action.movie;
            return { ...state };
        case ActionTypes.GET_CINEMA:
            let danhSachCacRap = [...state.danhSachCacRap];
            danhSachCacRap.push(action.danhSachCacRap);
            state.danhSachCacRap =danhSachCacRap;
            return { ...state };
        // Huy viet
        case ActionTypes.GET_LOGO_CINEMA:
            state.listLogo = action.listLogo;
            return { ...state };
        default:
            return { ...state };
    }
};
export default movieReducer;
