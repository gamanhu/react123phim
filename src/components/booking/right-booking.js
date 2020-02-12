import React, { useEffect } from 'react';
import noticeImg from "../../img/exclamation.png";
import { connect } from 'react-redux';
import * as action from "../../redux/actions";


function RightBooking(props) {
    // const [state,setState] = useState(props);
    const renderGheKhachChon = (gheKhachChon) => {
        if (gheKhachChon && gheKhachChon.length > 0) {
            gheKhachChon = gheKhachChon.sort((a, b) => a.seatInfo.stt - b.seatInfo.stt);
            return gheKhachChon.map((item, index) => {
                return (
                    <span key={index}>{` ${item.seatName} `}</span>
                )
            })
        }
    }
    const renderTienGhe = gheKhachChon => {
        let total = 0;
        if (gheKhachChon && gheKhachChon.length > 0) {
            total = gheKhachChon.reduce((acc, cur) => (acc + cur.seatInfo.giaVe), 0);
        }
        return Number((total).toFixed(0)).toLocaleString();
    }
    // Btn Dat Ve Inline CSS
    const btnStyle = {
        cursor: 'pointer',
        backgroundImage: 'linear-gradient(223deg,#b4ec51 0,#429321 100%)',
    }
    const disableStyle = {
        cursor: 'initial',
        backgroundImage: 'none',
        backgroundColor: "#afafaf",
    }

    useEffect(() => {

    }, [props])
    return (
        <div className="right__content">
            <div className="booking-info__content">
                <div className="row total">
                    <span className="cash">{`${renderTienGhe(props.gheKhachChon)} đ`}</span>
                </div>
                <div className="row filmname">
                    <span className="tenPhim">{`${props.thongTinPhim.tenPhim}`}</span>
                    <div className="content-cinema">
                        <div className="address">
                            <span className="brand-cinema">{`${props.thongTinPhim.tenCumRap}`}</span>
                            {/* <span className="cinema-name">Sư Vạn Hạnh</span> */}
                        </div>
                        <div className="hour">{`Suất chiếu ngày ${props.thongTinPhim.ngayChieu} - ${props.thongTinPhim.gioChieu} - ${props.thongTinPhim.tenRap}`}</div>
                    </div>
                </div>
                <div className="row seat__name">
                    <div className="seat__picked col-sm-7">
                        <span style={{ color: "#fb4226" }}>Ghế
                        {renderGheKhachChon(props.gheKhachChon)}</span>
                    </div>
                    <div className="total__picked col-sm-5">{renderTienGhe(props.gheKhachChon)} đ</div>
                </div>
                <div className="row user__email">
                    <p className="label">E-mail</p>
                    <span className="email__info">{`${props.userInfo.email}`}</span>
                </div>
                <div className="row user__phone">
                    <p className="label">Phone</p>
                    <span className="phone__info">{`${props.userInfo.soDT}`}</span>
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
            <div 
            className="buyticket" 
            style={(props.gheKhachChon.length > 0) ? btnStyle : disableStyle} 
            onClick={() => {
                if(props.gheKhachChon.length>0){
                    
                    let danhSachVe = props.gheKhachChon.map((item)=>{
                        return {
                            maGhe:item.seatInfo.maGhe,
                            giaVe:item.seatInfo.giaVe
                        }
                    });
                    props.actDatVe(props.thongTinPhim.maLichChieu,danhSachVe,props.userInfo.taiKhoan);

                }
            }}>Đặt Vé</div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        gheKhachChon: state.bookingReducer.gheKhachChon,
        thongTinPhim: state.bookingReducer.thongTinPhim,
        userInfo: state.userReducer.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return{
        actDatVe: (maLichChieu,danhSachVe,taiKhoanNguoiDung)=>{
            let data = {maLichChieu,danhSachVe,taiKhoanNguoiDung}
            dispatch(action.actDatVeAPI(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightBooking);
