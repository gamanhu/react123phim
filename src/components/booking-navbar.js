import React from 'react';
import avatarImg from "../img/avatar.png";

export default function BookingNavbar(props) {
    return (
        <div className="info__navbar">
            <ul className="step__info">
                <li className={props.isBookingSuccess?"":"active"}>01 CHỌN GHẾ VÀ THANH TOÁN</li>
                <li className={props.isBookingSuccess?"active":""}>02 KẾT QUẢ ĐẶT VÉ</li>
            </ul>
            <div className="user__info">
                <img src={avatarImg} alt="login-icons" />
                <span className="d-inline-block mb-0">{props.isLogin ? `${props.userInfo.hoTen}` : ""}</span>
            </div>
        </div>
    )
}
