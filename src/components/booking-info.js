import React from 'react'
import noticeImg from "../img/exclamation.png";
export default function BookingInfo() {
    return (
        <div className="right__content">
            <div className="booking-info__content">
                <div className="row total">
                    <p className="cash">0 đ</p>
                </div>
                <div className="row filmname">
                    <span>Gái Già Lắm Chiêu 3</span>
                    <div className="content-cinema">
                        <div className="address">
                            <span className="brand-cinema">CGV</span>
                            <span className="cinema-name">Sư Vạn Hạnh</span>
                        </div>
                        <div className="hour">Hôm nay 04/02/2020 - 21:30 - Cinema 2</div>
                    </div>
                </div>
                <div className="row seat__name">
                    <div className="seat__picked col-sm-7">
                        <span style={{ color: "#fb4226" }}>Ghế</span>
                    </div>
                    <div className="total__picked col-sm-5">0 đ</div>
                </div>
                <div className="row user__email">
                    <p className="label">E-mail</p>
                    <span className="email__info">chrisnguyen995@gmail.com</span>
                </div>
                <div className="row user__phone">
                    <p className="label">Phone</p>
                    <span className="phone__info">0708285600</span>
                </div>
            </div>
            <div className="notice">
                <img className="icon" src={noticeImg} alt="notice" />
                <span className="title">
                    Vé đã mua không thể đổi hoặc hoàn tiền
                <br />
                </span>
                <span className="title">
                    Mã vé sẽ đuợc gửi qua tin nhắn{" "}
                    <span style={{ color: "#f79320" }}>ZMS </span>(tin nhắn Zalo) và{" "}
                    <span style={{ color: "#f79320" }}>Email </span> đã nhập.
                </span>
            </div>
            <div className="buyticket">Đặt Vé</div>
        </div>
    )
}
