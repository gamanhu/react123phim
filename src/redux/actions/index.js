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

//Lay 1 bo phim bang id
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

//Lay lich danh sach rap
export const actGetShowTimes= (maHeThongRap)=>{
    return dispatch => {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        })
        .then(result=>{
            // console.log(result);
            dispatch({
                type:ActionType.GET_CINEMA,
                danhSachCacRap : result.data,
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
//Lay logo rap 
export const actGetListLogo= ()=>{
    return dispatch => {
        Axios({
            method:"GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`
        })
        .then(result=>{
            console.log(result);
            dispatch({
                type:ActionType.GET_LOGO_CINEMA,
                listLogo : result.data
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
}