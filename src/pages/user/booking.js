import React, {useState} from 'react';
import screenImg from "../../img/screen-img.png";
import cgvImg from "../../img/cgv.png";
import avatarImg from "../../img/avatar.png";
import SeatIcon from "../../components/seat-icon";
import SeatDistribute from "../../components/seat-distribute";
import BookingInfo from "../../components/booking-info";
import {connect} from 'react-redux';

function Booking(props) {
    const abcstr= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabetOrder = abcstr.split('');
    const [state,setState] = useState({
        isChoose: false,
        // isPick: true,
    })
    // const alphabetOrder = ['A','B','C','D','E','F','G','H','I','K','L','M']
    // const handleOnClick = (isChoose) => {
    //     setState({
    //         ...state,
    //         isChoose:!isChoose,
    //     })
    // }
    // const handlePick = (isPick) => {
    //     setState({
    //         ...state,
    //         isPick:!isPick,
    //     })
    // }
    const chunkify = (a, n, balanced) => {
        if (n < 2)
            return [a];

        let len = a.length,
                out = [],
                i = 0,
                size;
    
        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }
    
        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }
    
        else {
    
            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));
    
        }
    
        return out;
    }
    const renderGhe = (danhSachGhe) => {
        console.log(danhSachGhe);
        if(danhSachGhe && danhSachGhe.length>0){
            let seatRow = chunkify(danhSachGhe,10,9);
            return seatRow.map((item,index)=>{
                return(
                    <div key={index} className="seat__row">
                        <span className="row__name">{alphabetOrder[index]}</span> 
                        {renderRow(item)}
                    </div>
                )
            })
            // return seatRow = danhSachGhe.map
            
            // return danhSachGhe.map((item,index)=>{
            //     return (   
            //         <div className="seat__row">
            //             <SeatIcon key={index} />

            //         </div>
                    
            //     )
            // })
        }
    }
    const renderRow = (hangGhe) =>{
        if(hangGhe){
            return hangGhe.map((item,index)=>{
                return <SeatDistribute key={index} seatInfo={item} seatNum = {index}/>
            })
        }
    }
    return (
        <div>
            <div className="left__content">
                <div className="info__navbar">
                    <ul className="step__info">
                        <li className="active">01 CHỌN GHẾ VÀ THANH TOÁN</li>
                        <li>02 KẾT QUẢ ĐẶT VÉ</li>
                    </ul>
                    <div className="user__info">
                        <img src={avatarImg} alt="login-icons" />
                        <span className="d-inline-block mb-0">Đăng nhập</span>
                    </div>
                </div>
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
                    <div className="seats__position">
                        {renderGhe(props.danhSachGhe)}
                    </div>
                    <div className="note-seat">
                        <div className={`seat__type }`}>
                           <SeatIcon type={"Thuong"} state={state}/>
                            <span>Ghế Thường</span>
                        </div>
                        <div className={`seat__type }`}>
                           <SeatIcon type={"Vip"} state={state}/>
                            <span>Ghế Vip</span>
                        </div>
                    </div>
                </div>
            </div>
            <BookingInfo/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        danhSachGhe : state.bookingReducer.danhSachGhe,
        thongTinPhim: state.bookingReducer.thongTinPhim
    }
}
export default connect(mapStateToProps,null)(Booking);