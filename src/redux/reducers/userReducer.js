import * as ActionTypes from "../constants/action-types";

let initialState= {
    userInfo:{
        taiKhoan: "",
        hoTen: "",
        email: "",
        soDT: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        accessToken: ""
    },
    isLogin: false,

};

const initial = (state=initialState)=>{
    // console.log(state);
    if(localStorage.getItem("UserLogin")){
        state.isLogin=true;
        state.userInfo = JSON.parse(localStorage.getItem("UserLogin"));
        return {...state};
    }
    // console.log(state);
}
initial();
const userReducer = (state = initialState, action)=> {
    switch (action.type){
        case ActionTypes.USER_LOGIN_SUCCESS:
            state.userInfo = action.userInfo;
            state.isLogin = true;
            localStorage.setItem("UserLogin",JSON.stringify(action.userInfo));
            return{...state};
        case ActionTypes.USER_SIGN_OUT:
            state.isLogin = false;
            localStorage.setItem("UserLogin","");
            state.userInfo = initialState.userInfo;
            return {...state};
        default:
            return {...state};
    }
}

export default userReducer;