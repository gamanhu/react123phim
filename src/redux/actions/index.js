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

// Lay thong tin lich chieu cua 1 bo phim
export const actGetMovieOnScreenListAPI = (maPhim) =>{
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            data: maPhim
        })
        .then(result => {
            console.log(result);
        })
        .catch (err =>{
            console.log(err);
        })
    }
}
//Huy viet 
export const actGetDetailMovie= (id)=>{
    return dispatch => {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
        .then(result=>{
            console.log(result);
            dispatch({
                type:ActionType.GET_DETAIL_MOVIE,
                movie : result.data
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const actGetShowTimes= (maHeThongRap)=>{
    return dispatch => {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        })
        .then(result=>{
            console.log(result);
            dispatch({
                type:ActionType.GET_CINEMA,
                danhSachCacRap : result.data
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

// Huy viet 


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
                // console.log(result.data);
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
export const actGetBoothInfoFailAPI = (maLichChieu)=>{
    return dispatch =>{
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
        })
        .then(result=>{
            console.log(result)
        })
        .catch(err=>{
            if(err.response){
                dispatch({
                    type:ActionType.GET_BOOTH_INFO_FAIL
                })
            }
        });
    }
}

export const actDatVeAPI = (thongTinDatVe)=> {
    const userInfo = JSON.parse(localStorage.getItem("UserLogin"));
    console.log(thongTinDatVe);
    return dispatch=>{
        Axios({
            method: "POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            data: thongTinDatVe,
            headers: {
                Authorization:`Bearer ${userInfo.accessToken}`
            }
        })
        .then(result=>{
            if(result.data){
                dispatch({
                    type: ActionType.BOOKING_SUCCESS,
                    data:result.data,
                })
            }

        })
        .catch(err=>{
            alert(err);
        })
    }
}

export const actLoginAdmin = (user,history) => {
    return dispatch =>  {
        Axios({
            method:"POST",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
            data:user
        })
        .then(result=>{
            if(result.data.maLoaiNguoiDung === "QuanTri"){
                alert("Login thanh cong");
                console.log(history);
                localStorage.setItem("AdminLogin", JSON.stringify(result.data));
                // Phai lam no chuyen huong sang trang dashboard/ phai xai history.push nhung chi duoc xai trong cai component thoi
                history.push('/dashboard');
                
                dispatch({
                    type:ActionType.ADMIN_LOGIN_SUCCESS,
                    adminInfo:result.data
                });
            } else{
                alert("Bạn phải sử dụng tài khoản quản trị viên để đặt vé");
            }
        })
        .catch(err=>{
            alert(err);
        })
    }
}

export const actGetListUserAPI = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`

        })
            .then(result => {
                dispatch({
                    type: ActionType.GET_LIST_USER,
                    listUser: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })

    }
}
export const actOnEditPhimAPI = (data)=> {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim`,
            data,
            headers: {
                Authorization:`Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            dispatch({
                type: ActionType.UPDATE_MOVIE_SUCCESS,
                movie: data,
            });
            
            alert('Cập Nhật Phim Thành Công');
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const actOnAddPhimAPI = (data)=> {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim`,
            data: data,
            headers: {
                Authorization:`Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            
            dispatch({
                type: ActionType.ADD_MOVIE_SUCCESS,
                movie: data,
            });
            
            alert('Thêm Phim Thành Công');
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const actOnDeletePhimAPI = (maPhim)=> {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
            data: maPhim,
            headers: {
                Authorization:`Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            dispatch({
                type: ActionType.DELETE_MOVIE_SUCCESS,
                maPhim: maPhim,
            });
            alert('Xóa Phim Thành Công');
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const actOnEditUserAPI = (data)=> {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"PUT",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            data: data,
            headers: {
                Authorization:`Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            console.log(result.data);
            alert("Cap nhat thanh cong")
            dispatch({
                type:ActionType.ON_SAVE_USER_SUCCESS,
            })
        })
        .catch(err=>{
            console.log(err);
            alert("Cap nhat that bai")
        })
    }
}
export const actOnAddUserAPI = (data)=> {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung`,
            data: data,
            headers: {
                Authorization:`Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            console.log(result.data);
            dispatch({
                type:ActionType.ON_SAVE_USER_SUCCESS,
            })
            alert("Them Nguoi Dung thanh cong")

        })
        .catch(err=>{
            console.log(err);
            alert("Them Nguoi Dung that bai")
        })
    }
}
export const actOnDeleteUserAPI = (taiKhoan)=> {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
            data: taiKhoan,
            headers: {
                Authorization:`Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            dispatch({
                type: ActionType.ON_SAVE_USER_SUCCESS,
            });
            alert('Xóa Nguoi Dung Thành Công');
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
export const actUpdateImgAPI = (maPhim,data) => {
    const adminInfo = JSON.parse(localStorage.getItem("AdminLogin"));
    return dispatch => {
        Axios({
            method:"POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim`,
            data,
            headers:{
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'multipart/form-data',
                // Authorization: `Bearer ${adminInfo.accessToken}`
            }
        })
        .then(result=>{
            alert('thanhcong');
        })
        .catch(err=>{
            alert('thatbai');
        })
    }
}


