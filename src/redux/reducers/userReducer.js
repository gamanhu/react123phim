import * as ActionTypes from "../constants/action-types";

let initialState = {
    userInfo: {
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        accessToken: ""
    },
    isLogin: false,
    isLoginAdmin: false,
    listUser: []

};

const initial = (state = initialState) => {
    // console.log(state);
    if (localStorage.getItem("UserLogin")) {
        state.isLogin = true;
        state.userInfo = JSON.parse(localStorage.getItem("UserLogin"));
        return { ...state };
    }
    if (localStorage.getItem("AdminLogin")) {
        state.isLoginAdmim = true;
        state.userInfo = JSON.parse(localStorage.getItem("AdminLogin"));
        return { ...state };
    }
    // console.log(state);
}
initial();
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN_SUCCESS:
            state.userInfo = action.userInfo;
            state.isLogin = true;
            localStorage.setItem("UserLogin", JSON.stringify(action.userInfo));
            return { ...state };
        case ActionTypes.USER_SIGN_OUT:
            state.isLogin = false;
            localStorage.removeItem("UserLogin");
            localStorage.removeItem("AdminLogin");
            state.userInfo = initialState.userInfo;
            return { ...state };
        case ActionTypes.ADMIN_LOGIN_SUCCESS:
            state.userInfo = action.adminInfo;
            state.isLoginAdmin = true;
            localStorage.setItem("AdminLogin", JSON.stringify(action.adminInfo));
            return { ...state };
        case ActionTypes.GET_LIST_USER:
            let listUser = action.listUser;
            state.listUser = listUser;
            return {...state};
        case ActionTypes.ON_SAVE_USER_SUCCESS:
            state.listUser = [];
            return {...state};
        default:
            return { ...state };
    }
}

export default userReducer;