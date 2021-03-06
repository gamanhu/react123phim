import * as ActionTypes from "../constants/action-types";

let initialState = {
    listCinemaBrand: [],
    brandName:"",
    listBranch: [],
    listMovieBrand: [],
    listBranchHaveMovie:[],
    // logo: '',
    
}

const cinemaBrandReducer = (state=initialState,action) => {
    switch (action.type) {
        default:
            return {...state};
        case ActionTypes.GET_LIST_CINEMA_BRAND:
            if(action.listCinemaBrand){
                state.listCinemaBrand = action.listCinemaBrand;
            }
            return {...state};
        case ActionTypes.GET_LIST_BRANCH:
            if(action.listBranch){
                state.listBranch=action.listBranch;
                state.brandName = action.brandName;
                // let indexArr = state.listCinemaBrand.findIndex(item=>item.maHeThongRap === action.brandName);
                // let logo = state.listCinemaBrand[indexArr].logo;
                // state.logo = logo;
            }
            return{...state};
        case ActionTypes.GET_LIST_MOVIE_BRAND:
            if(action.listMovieBrand){
                state.listMovieBrand=action.listMovieBrand;
                state.listBranchHaveMovie = state.listMovieBrand.map((item)=>{
                    return item.lstCumRap.map((item2)=>{
                        return item2.maCumRap
                    })
                })
            }
            return{...state};
    }
}

export default cinemaBrandReducer;