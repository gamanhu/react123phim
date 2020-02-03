import * as ActionTypes from "../constants/action-types";

let initialState = {
    thongTinPhim: [],
    danhSachGhe: [],
}

const initial = (state=initialState)=>{
    // console.log(state);
    if(localStorage.getItem("danhSachGhe")){
        state.danhSachGhe = JSON.parse(localStorage.getItem("danhSachGhe"));
        return {...state};
    }
    // console.log(state);
}
initial();

const bookingReducer = (state = initialState,action) => {
    switch (action.type) {
        case ActionTypes.GET_BOOTH_INFO:
                state.thongTinPhim = action.thongTinPhim;
                state.danhSachGhe = action.danhSachGhe;
                localStorage.setItem("danhSachGhe",JSON.stringify(action.danhSachGhe));
            
            return {...state}
        default:
            return {...state};
    }
}

export default bookingReducer;