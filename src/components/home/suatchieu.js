import React,{useEffect} from 'react';
import {NavLink} from "react-router-dom";
// import * as action from "../../redux/actions";
import { connect } from "react-redux";
 function SuatChieu(props) {

    // const renderGioChieu = (lichChieu, ngay) => {
    //     return lichChieu.lstLichChieuTheoPhim.map((item, index) => {
    //         if (ngay === (new Date(item.ngayChieuGioChieu).toLocaleDateString())) {
    //             return (
    //                 <NavLink key={index} href="/">
    //                     <span>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</span>
    //                 </NavLink>
    //             )
    //         }
    //     })
    // }
    useEffect(()=>{
        props.setBookingSuccess();
    },[props])
    const handleOnClick = (maLichChieu)=>{
        // props.getBoothInfo(maLichChieu);
        // props.setBookingSuccess();
    }
    
    const renderNgayChieu = (lichChieu, datelist) => {
        if (lichChieu.lstLichChieuTheoPhim && lichChieu.lstLichChieuTheoPhim.length > 0) {
            
            return datelist.map((ngay,index2) => {
                return (
                    <div key={index2} className="start-time">
                        <p>Ngày: {ngay}</p>
                        {/* {renderGioChieu(lichChieu,ngay)} */}
                        {   
                                lichChieu.lstLichChieuTheoPhim.map((item, index) => {
                                    if (ngay === (new Date(item.ngayChieuGioChieu).toLocaleDateString())) {
    
                                        return (
                                            <NavLink 
                                            key={index} 
                                            to={`/booking/${item.maLichChieu}`} 
                                            onClick={()=>handleOnClick(item.maLichChieu)} >
                                                <span>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</span>
                                            </NavLink>
                                        )
                                    }
                                })
                        }
                        <div className="clear" />
                    </div>


                )

            })
        }
    }
    const renderPhimChieu = () => {
        if (props.isData) {
            return props.danhSachPhim.map((phim, index) => {
                let datetime = phim.lstLichChieuTheoPhim.map(item => {
                    return new Date(item.ngayChieuGioChieu).toLocaleDateString()
                });
                let datelist = datetime.filter((item, index) => datetime.indexOf(item) === index)
                // console.log(datelist);
                return (
                    <div key={index} className="movie-item">
                        <div className="movie-detail">
                            <img
                                src="./img/cgv-cresentmall.jpg"
                                width="50px"
                                alt="cgv-cresenmall"
                            />
                            <div className="movie-item__detail">
                                <h5>{phim.tenPhim}</h5>
                                <p>Địa chỉ</p>
                            </div>
                        </div>
                        {renderNgayChieu(phim, datelist)}
                        {/* <div className="start-time">
                            
                            <div className="clear" />
                        </div> */}
                    </div>
                )
            })
        }
    }

    // if(props.listBranchHaveMovie && props.listBranchHaveMovie.length>0){
    if (props.isData) {
        // console.log(props.danhSachPhim[0].lstLichChieuTheoPhim);
        return (
            <div className={`tab-pane fade ${(props.active ? "active show" : "")}`} id={`${props.maCumRap}`}>
                {renderPhimChieu()}
            </div>
        )
    } else {
        return (
            <div className={`tab-pane fade ${(props.active ? "active show" : "")}`} id={`${props.maCumRap}`} >
                <h2>Không có suất chiếu nào</h2>
            </div>
        )
    }
    

}
const mapDispatchToProps = dispatch => {
    return{
        // getBoothInfo : (maLichChieu) => {
        //     dispatch(action.actGetBoothInfoAPI(maLichChieu));
        // },
        setBookingSuccess: ()=>{
            dispatch({
                type:"FALSE_BOOKING",
            })
        }
    }
};
export default connect(null,mapDispatchToProps)(SuatChieu);