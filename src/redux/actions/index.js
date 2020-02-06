import * as ActionType from "../constants/action-types.js";
import Axios from "axios";


export const actGetListMovieAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`

        })
            .then(result => {
                dispatch({
                    type: ActionType.GET_LIST_MOVIE,
                    listMovie: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })

    }
}
// Lay thong tin chuoi he thong rap
export const actGetListCinemaBrandAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`
        })
            .then(result => {
                dispatch({
                    type: ActionType.GET_LIST_CINEMA_BRAND,
                    listCinemaBrand: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
}

//Lay list cac chi nhanh cua he thong rap
export const actGetListBranchAPI = (maHeThongRap) => {
    return dispatch => {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        })
        .then(result=>{
            dispatch({
                type:ActionType.GET_LIST_BRANCH,
                listBranch: result.data,
                brandName:maHeThongRap
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
// Lay Thong Tin Lich Chieu Theo He Thong Rap
export const actGetListMovieBrandAPI= (maHeThongRap,maNhom)=>{
    return dispatch => {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${maNhom}`
        })
        .then(result=>{
            // console.log(result.data);
            dispatch({
                type:ActionType.GET_LIST_MOVIE_BRAND,
                listMovieBrand:result.data,
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
//Login cho user
export const actLoginUser = (user,history) => {
    console.log(user);
    return dispatch =>  {
        Axios({
            method:"POST",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            data:user
        })
        .then(result=>{
            if(result.data.maLoaiNguoiDung === "KhachHang"){
                alert("Login thanh cong");
                console.log(history);
                // Phai lam no chuyen huong sang trang dashboard/ phai xai history.push nhung chi duoc xai trong cai component thoi
                history.push("/");
                
                dispatch({
                    type:ActionType.USER_LOGIN_SUCCESS,
                    userInfo:result.data
                });
            } else{
                alert("Bạn phải sử dụng tài khoản khách hàng để đặt vé");
            }
        })
        .catch(err=>{
            alert(err.response.data);
        })
    }

}

export const actGetBoothInfoAPI = (maLichChieu)=>{
    return dispatch =>{
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        })
        .then(result=>{
            if(result.data){
                console.log(result.data);
                dispatch({
                    type:ActionType.GET_BOOTH_INFO,
                    thongTinPhim: result.data.thongTinPhim,
                    danhSachGhe:result.data.danhSachGhe,
                })
                // history.push("/booking/maLichChieu");
            };
        })
        .catch(err=>{
            console.log(err);
        });
    }
}

