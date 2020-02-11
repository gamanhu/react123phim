import React, { useState, useEffect } from 'react';
import SeatPosition from "./seat-position";
import BookingNavbar from "./booking-navbar";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import IsLoading from "./is-loading";
import * as action from "../../redux/actions";
import screenImg from "../..//img/screen-img.png";
import cgvImg from "../../img/cgv.png";
import SeatIcon from "./seat-icon";
function LeftBooking(props) {
    const [state, setState] = useState({
        isLoading: true,
    });

    useEffect(() => {
        // console.log(props);
        // props.actGetBoothInfo(props.maLichChieu);
        if(props.danhSachGhe && props.danhSachGhe.length>0){
            setState({
                isLoading: false
            })

        }
    }, [props]);
    
    if (!props.isBookingSuccess) {
        return (
            <div className="left__content">
                <BookingNavbar
                    isLogin={props.isLogin}
                    userInfo={props.userInfo}
                    isBookingSuccess={props.isBookingSuccess} />
                <div className="fake-navbar"></div>
                <div className="seat__map container">
                    <div className="top__content">
                        <div className="logo-cinema">
                            <img src={cgvImg} alt="" />
                        </div>
                        <div className="content-cinema">
                            <p className="address">
                                <span>CGV - </span>
                                <span>Pandora City</span>
                            </p>
                        </div>
                        <div className="clear" />
                    </div>
                    <div className="screen__img">
                        <img src={screenImg} alt="" />
                    </div>
                    {state.isLoading ? (
                        <IsLoading />
                    ) : (
                            (
                                (<SeatPosition
                                    danhSachGhe={props.danhSachGhe}
                                />
                                )
                            ))}
                    <div className="note-seat">
                        <div className={`seat__type }`}>
                            <SeatIcon type={"Thuong"} state={{ isChoose: false }} />
                            <span>Ghế Thường</span>
                        </div>
                        <div className={`seat__type }`}>
                            <SeatIcon type={"Vip"} state={{ isChoose: false }} />
                            <span>Ghế Vip</span>
                        </div>
                        <div className={`seat__type }`}>
                            <SeatIcon type={"Vip"} state={{ isChoose: false, isBook: true }} />
                            <span>Ghế Da duoc dat</span>
                        </div>
                    </div>
                </div>

            </div>
        )

    } else {
        return (
            <div className="left__content">
                <BookingNavbar isLogin={props.isLogin} userInfo={props.userInfo} isBookingSuccess={props.isBookingSuccess} />
                <div className="fake-navbar"></div>
                {(props.danhSachGhe.length > 0 && props.thongTinPhim) ? (
                    <div>
                        <p>Chúc mừng bạn đã đặt vé thành công</p>
                        <NavLink to="/"><button className="btn btn-info">Trang chủ</button></NavLink>
                    </div>
                ) : (
                        <div>
                            <p>Giao dịch của bạn đã hết vui lòng quay lại trang chủ để chọn phim</p>
                            <NavLink to="/"><button className="btn btn-info">Trang chủ</button></NavLink>
                        </div>
                    )}

            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        danhSachGhe: state.bookingReducer.danhSachGhe,
        thongTinPhim: state.bookingReducer.thongTinPhim,
        isBookingSuccess: state.bookingReducer.isBookingSuccess,
        userInfo: state.userReducer.userInfo,
        isLogin: state.userReducer.isLogin,
    }
}

export default connect(mapStateToProps,null)(LeftBooking);
