import * as ActionTypes from "../constants/action-types";

let initialState = {
    thongTinPhim: [],
    danhSachGhe: [],
    gheKhachChon: [],
    isBookingSuccess: false,
    Exist: true,
}

const initial = (state = initialState) => {
    if (!JSON.parse(localStorage.getItem("isBookingSuccess"))) {
        state.danhSachGhe = JSON.parse(localStorage.getItem("danhSachGhe"));
        state.thongTinPhim = JSON.parse(localStorage.getItem("thongTinPhim"));
        state.isBookingSuccess = JSON.parse(localStorage.getItem("isBookingSuccess"));
    }  else {
        if(localStorage.getItem("danhSachGhe") && localStorage.getItem("thongTinPhim")){
            localStorage.removeItem("danhSachGhe");
            state.thongTinPhim = JSON.parse(localStorage.getItem("thongTinPhim"));
            state.isBookingSuccess = JSON.parse(localStorage.getItem("isBookingSuccess"));
        } else {
            state.thongTinPhim = JSON.parse(localStorage.getItem("thongTinPhim"));
            state.isBookingSuccess = JSON.parse(localStorage.getItem("isBookingSuccess"));

        }
    }
        return { ...state };
}
initial();

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_BOOTH_INFO:
            state.thongTinPhim = action.thongTinPhim;
            state.danhSachGhe = action.danhSachGhe;
            state.isBookingSuccess = false;
            localStorage.setItem("danhSachGhe", JSON.stringify(action.danhSachGhe));
            localStorage.setItem("thongTinPhim", JSON.stringify(action.thongTinPhim));
            localStorage.setItem("isBookingSuccess", JSON.stringify(false));

            return { ...state };
        case ActionTypes.GET_BOOTH_INFO_FAIL:
            state.thongtinPhim = [];
            state.danhSachGhe = [];
            state.Exist = false;
            return {...state};
        case ActionTypes.ADD_SEAT_USER_CHOOSE:
            if (action.isChoose) {
                if (!action.seatInfo.daDat) {
                    let gheKhachChon2 = [...state.gheKhachChon];
                    let gheKhachChon = {};
                    gheKhachChon.seatName = action.seatName;
                    gheKhachChon.seatInfo = action.seatInfo;
                    gheKhachChon2.push(gheKhachChon);
                    state.gheKhachChon = gheKhachChon2;
                }

            } else {
                let index = state.gheKhachChon.findIndex(item => item.seatName === action.seatName);
                let gheKhachChon = [...state.gheKhachChon];
                if (index !== -1) {
                    gheKhachChon.splice(index, 1);
                    state.gheKhachChon = gheKhachChon;
                }
            }
            return { ...state };
        case ActionTypes.BOOKING_SUCCESS:
            if (action.data) {
                if (localStorage.getItem("danhSachGhe") && localStorage.getItem("thongTinPhim")) {
                    state.isBookingSuccess = true;
                    localStorage.setItem("isBookingSuccess", JSON.stringify(true));
                    alert(action.data);
                }
            }
            return { ...state };
        case "FALSE_BOOKING":
            state.isBookingSuccess = false;
            state.thongTinPhim = [];
            state.danhSachGhe = [];
            // localStorage.setItem(isBookingSuccess)
            return {...state};
        default:
            return { ...state };
    }
}

export default bookingReducer;