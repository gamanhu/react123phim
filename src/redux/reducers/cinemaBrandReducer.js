import * as ActionTypes from "../constants/action-types";

let initialState = {
    listCinemaBrand: [],
    brandName:"",
    listBranch: [],
    listMovieBrand: [],
    listBranchHaveMovie:[]
    
}

const cinemaBrandReducer = (state=initialState,action) => {
    switch (action.type) {
        default:
            return {...state};
        case ActionTypes.GET_LIST_CINEMA_BRAND:
            if(action.listCinemaBrand){
                // console.log(action.listCinemaBrand);
                state.listCinemaBrand = action.listCinemaBrand;
            }
            return {...state};
        case ActionTypes.GET_LIST_BRANCH:
            if(action.listBranch){
                // console.log(action.listBranch);
                state.listBranch=action.listBranch;
                state.brandName = action.brandName;
            }
            return{...state};
        case ActionTypes.GET_LIST_MOVIE_BRAND:
            if(action.listMovieBrand){
                // console.log(action.listMovieBrand)
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