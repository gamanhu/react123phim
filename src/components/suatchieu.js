import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
// import { connect } from "react-redux";
export default function SuatChieu(props) {

    // const renderGioChieu = (lichChieu, ngay) => {
    //     return lichChieu.lstLichChieuTheoPhim.map((item, index) => {
    //         if (ngay === (new Date(item.ngayChieuGioChieu).toLocaleDateString())) {
    //             return (
    //                 <a key={index} href="/">
    //                     <span>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</span>
    //                 </a>
    //             )
    //         }
    //     })
    // }

    useEffect(()=>{
        return ()=>{
            const booking = `booking/1234`;
            console.log(booking);
        }
    },[])
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
                                        <NavLink key={index} to="/booking/1234">
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
                {/* <div className="movie-item">
                    <div className="movie-detail">
                        <img
                            src="./img/cgv-cresentmall.jpg"
                            width="50px"
                            alt="cgv-cresenmall"
                        />
                        <div className="movie-item__detail">
                            <h5>CGV - Cresent Mall</h5>
                            <p>Địa chỉ</p>
                        </div>
                    </div>
                    <div className="start-time">
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <div className="clear" />
                    </div>
                </div>
                <div className="movie-item">
                    <div className="movie-detail">
                        <img
                            src="./img/cgv-cresentmall.jpg"
                            width="50px"
                            alt="cgv-cresenmall"
                        />
                        <div className="movie-item__detail">
                            <h5>CGV - Cresent Mall</h5>
                            <p>Địa chỉ</p>
                        </div>
                    </div>
                    <div className="start-time d-block">
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <a href="/">
                            <span>10:30</span>~12:27
                                </a>
                        <div className="clear" />
                    </div>
                </div> */}
            </div>
        )
    } else {

        return (
            <div className={`tab-pane fade ${(props.active ? "active show" : "")}`} id={`${props.maCumRap}`} >
                <h2>Không có suất chiếu nào</h2>
            </div>
        )
    }
    // } 
    // else {
    //     return(
    //         <div></div>
    //     )
    // }

}
