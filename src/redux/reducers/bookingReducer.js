import * as ActionTypes from "../constants/action-types";

let initialState = {
    thongTinPhim: [],
    danhSachGhe: [],
    gheKhachChon: [],
}

const initial = (state = initialState) => {
    // console.log(state);
    if (localStorage.getItem("danhSachGhe")) {
        state.danhSachGhe = JSON.parse(localStorage.getItem("danhSachGhe"));
        return { ...state };
    }
    // console.log(state);
}
initial();

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_BOOTH_INFO:
            state.thongTinPhim = action.thongTinPhim;
            state.danhSachGhe = action.danhSachGhe;
            localStorage.setItem("danhSachGhe", JSON.stringify(action.danhSachGhe));

            return { ...state }
        case ActionTypes.ADD_SEAT_USER_CHOOSE:
            if (action.isChoose) {
                if(!action.seatInfo.daDat){
                    let gheKhachChon2 = [...state.gheKhachChon];
                    let gheKhachChon = {};
                    gheKhachChon.seatName = action.seatName;
                    gheKhachChon.seatInfo = action.seatInfo;
                    gheKhachChon2.push(gheKhachChon);
                    state.gheKhachChon = gheKhachChon2;
                    console.log(state);

                }
                
            } else {
                let index = state.gheKhachChon.findIndex(item => item.seatName === action.seatName);
                let gheKhachChon = [...state.gheKhachChon];
                if (index !== -1) {
                    gheKhachChon.splice(index, 1);
                    state.gheKhachChon = gheKhachChon;
                }
            }
            return {...state};
        default:
            return { ...state };
    }
}

export default bookingReducer;