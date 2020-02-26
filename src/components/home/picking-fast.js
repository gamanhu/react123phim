import React, { useState } from 'react';
// import WithSelect from '../with-select';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as action from "../../redux/actions";
function PickingFast(props) {
    const [state, setState] = useState({
        Phim: '',
        onOpenPhim: false,
        rapPhim: '',
        filterLichChieu: [],
        onOpenRap: false,
        ngayChieuPhim: '',
        onOpenNgay: false,
        // filterSuatChieu: [],
        // suatChieu: '',
        // onOpenSuat: false
    });
    const [listSuatChieu, setListSuatChieu] = useState([])
    const [openSuatChieu, setOpenSuatChieu] = useState(false)
    const [suatChieuPicked, setSuatChieuPicked] = useState({
        maLichChieu: '',
        suatChieu: ''
    })
    const [ngayChieu, setNgayChieu] = useState('')
    const selectOption = (type, onOpen) => {
        switch (type) {
            case 'phim':
                setState({
                    ...state,
                    onOpenPhim: !onOpen
                });
                break;
            case 'rap':
                setState({
                    ...state,
                    onOpenRap: !onOpen
                });
                break;
            case 'ngay':
                setState({
                    ...state,
                    onOpenNgay: !onOpen
                });
                break;
            case 'suat':
                setOpenSuatChieu(!onOpen)
                break;
            default:
                break;
        }
    }
    const chonPhim = (tenPhim, maPhim) => {
        props.getMovieInfo(maPhim);
        setState({
            ...state,
            Phim: tenPhim,
            onOpenPhim: false,
            onOpenRap:true,
        });
    };
    const renderPhim = (listMovie) => {
        // console.log(props.listMovie);
        if (listMovie && listMovie.length > 0) {
            return props.listMovie.map((movie, index) => {
                return (
                    <li key={index} className="item" onClick={() => { chonPhim(movie.tenPhim, movie.maPhim) }}>
                        {movie.tenPhim}
                    </li>
                )
            })

        }
    }
    const chonRap = (tenCumRap,indexLichChieu) => {
        let lichChieuPhim = props.lichChieuPhim[indexLichChieu];
        // console.log(lichChieuPhim);
        setState({
            ...state,
            filterLichChieu:lichChieuPhim[0],
            rapPhim: tenCumRap,
            onOpenRap:false,
            onOpenNgay:true,
        }) 
        // console.log(state);
    };
    const renderRap = (branchHaveMovie) => {
        if (branchHaveMovie && branchHaveMovie.length > 0) {
            return branchHaveMovie.map((item) => item.map((rap,index)=>{
                return (
                    <li 
                    key={index} 
                    className="item-rap" 
                    onClick={() => { 
                        chonRap(rap.tenCumRap,index)
                    }}
                    >
                        {rap.tenCumRap}
                    </li>
                )

            }) 
            )
        }
    };
    const FormatDate = (date) => {
        let today = new Date(date);
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!

        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        let out = dd + '/' + mm + '/' + yyyy;
        return out
    };
    const pickNgay = (date,dateUnFormatted,lichChieu) => {
        let filterSuat = lichChieu.filter(item=>(new Date(item.ngayChieuGioChieu).toLocaleDateString())===dateUnFormatted)
        console.log(lichChieu);
        console.log(filterSuat);
        setListSuatChieu(filterSuat);
        setOpenSuatChieu(true);
        setNgayChieu(date);
        setState({
            ...state,
            // filterSuatChieu: filterSuat,
            // ngayChieuPhim: date,
            onOpenNgay:false,
            // onOpenSuat:true
        }, console.log(123)) 

        // console.log(state);
    };
    React.useEffect(()=>{console.log(state)},[state.filterSuatChieu,state.onOpenNgay])
    const renderNgay = (lichChieuPhim) => {
        if(lichChieuPhim && lichChieuPhim.length>0){
            // console.log(lichChieuPhim);
            let datetime = lichChieuPhim.map(item => {
                return new Date(item.ngayChieuGioChieu).toLocaleDateString()
            });
            let dateList = datetime.filter((a, b) => datetime.indexOf(a) === b)
            return dateList.map((item,index)=>{
                let date = FormatDate(new Date(item))
                return (
                <li 
                key={index}
                className="item-ngay"
                onClick = {()=>{
                    pickNgay(date,item,lichChieuPhim)
                }}
                >Ngày {date}
                </li>
                )
            })

        }
    };
    const renderSuatChieu = (filterSuatChieu) => {
        if(filterSuatChieu && filterSuatChieu.length>0){
            return filterSuatChieu.map((item,index)=>{
                return (
                <li 
                key={index}
                onClick={()=> {chonSuatChieu(item.maLichChieu,item.ngayChieuGioChieu)}}
                >{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</li>
                )
            })
        }
    };
    const chonSuatChieu = (maLichChieu, ngayChieuGioChieu) => {
        setSuatChieuPicked({
            maLichChieu: Number(maLichChieu),
            suatChieu: (new Date(ngayChieuGioChieu).toLocaleTimeString())
        })
    }
    // console.log(props.listMovie);
    // console.log(state);
    return (
        <div className="selling-fast">
            {/* Chon Phim */}
            <div className="selectPhim">
                <div className="selectMenu" onClick={() => { selectOption('phim', state.onOpenPhim) }} >
                    {(state.Phim) ? `${state.Phim}` : "Phim"}
                </div>
                <ul
                    className={`selectScroll ${state.onOpenPhim ? "active" : ""}`}
                >
                    {renderPhim(props.listMovie)}
                </ul>

            </div>
            {/* Chon Rạp */}
            <div className="selectCinema">
                <div className="selectMenu" onClick={() => { selectOption('rap', state.onOpenRap) }}>
                    {(state.rapPhim) ? `${state.rapPhim}` : "Rạp"}
                </div>
                <ul className={`selectScroll ${state.onOpenRap ? "active" : ""}`}>
                    {renderRap(props.branchHaveMovie)}
                </ul>
            </div>
            {/* Chọn Ngày */}
            <div className="selectDate " onClick={() => { selectOption('ngay', state.onOpenNgay) }}>
                <div className="selectMenu">
                    {(ngayChieu) ? `${ngayChieu}` : "Ngày xem"}
                </div>
                <ul className={`selectScroll ${state.onOpenNgay ? "active" : ""}`}>
                    {renderNgay(state.filterLichChieu)}
                </ul>
            </div>
            {/* Chọn Suất */}
            <div className="selectSession" onClick={() => { selectOption('suat', openSuatChieu) }}>
                <div className="selectMenu">
                    {(suatChieuPicked.suatChieu) ? `${suatChieuPicked.suatChieu}` : "Suất Chiếu"}
                </div>
                <ul className={`selectScroll ${openSuatChieu ? "active" : ""}`}>
                    {renderSuatChieu(listSuatChieu)}
                </ul>
            </div>
            <div className="buyFast">
                {suatChieuPicked.maLichChieu?
                <NavLink to={`/booking/${suatChieuPicked.maLichChieu}`}><button className="btn btn-primary active">MUA VÉ NGAY</button></NavLink> : 
                <button disabled className="btn btn-primary">MUA VÉ NGAY</button>    
            }
                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movieOnScreenInfo: state.movieReducer.movieOnScreenInfo,
        branchHaveMovie: state.movieReducer.branchHaveMovie,
        lichChieuPhim: state.movieReducer.lichChieuPhim,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getMovieInfo: (maPhim) => {
            dispatch(action.actGetMovieOnScreenListAPI(maPhim));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickingFast);
