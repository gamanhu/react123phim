import React,{useEffect} from 'react';
import noticeImg from "../img/exclamation.png";
import { connect } from 'react-redux';


function BookingInfo(props) {
    // const [state,setState] = useState(props);
    const renderGheKhachChon = (gheKhachChon) => {
        if (gheKhachChon && gheKhachChon.length > 0) {
            gheKhachChon = gheKhachChon.sort((a,b)=> a.seatInfo.stt-b.seatInfo.stt);
            return gheKhachChon.map((item, index) => {
                return (
                    <span key={index}>{` ${item.seatName} `}</span>
                )
            })
        }
    }
    const renderTienGhe = gheKhachChon => {
        let total = 0;
        if(gheKhachChon && gheKhachChon.length>0){
            total = gheKhachChon.reduce((acc,cur)=>(acc+cur.seatInfo.giaVe),0);
        } 
        return Number((total).toFixed(0)).toLocaleString();
    }
    
    useEffect(()=>{
    
    },[props])

    return (
        <div className="right__content">
            <div className="booking-info__content">
                <div className="row total">
                    <span className="cash">{renderTienGhe(props.gheKhachChon)}đ</span>
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
                        <span style={{ color: "#fb4226" }}>Ghế
                        {renderGheKhachChon(props.gheKhachChon)}</span>
                    </div>
                    <div className="total__picked col-sm-5">{renderTienGhe(props.gheKhachChon)} đ</div>
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
            <div className="buyticket" disabled onClick={()=>{}}>Đặt Vé</div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        gheKhachChon: state.bookingReducer.gheKhachChon,
        iloveyou:state.bookingReducer.iloveyou
    };
};

export default connect(mapStateToProps, null)(BookingInfo);
