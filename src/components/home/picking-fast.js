import React, { useEffect, useState } from 'react';
// import WithSelect from '../with-select';
import {connect} from "react-redux";
// import { NavLink } from "react-router-dom";
export default function PickingFast(props) {
    const [state, setState] = useState({
        Phim: '',
        onOpenPhim:false
    });
    const chonPhim = (tenPhim,maPhim) => {
        setState({
            Phim: tenPhim,
        })
    };
    const selectOption = (onOpen) =>{
        setState({
            ...state,
            onOpenPhim:!onOpen
        })
    }
    const renderPhim = (listMovie) => {
        // console.log(props.listMovie);
        if(listMovie && listMovie.length>0){
            return props.listMovie.map((movie, index) => {
                return (
                    <li key={index} className="item" onClick={() => { chonPhim(movie.tenPhim,movie.maPhim) }}>
                        {movie.tenPhim}
                    </li>
                )
            })

        }
    }
    console.log(props.listMovie);
    return (
        <div className="selling-fast">
            <div className="selectPhim">
                <div className="selectMenu" onClick={()=>{selectOption(state.onOpenPhim)}} >
                    {(state.Phim) ? `${state.Phim}` : "Phim"}
                </div>
                <ul 
                className={`selectScroll ${state.onOpenPhim?"active":""}`} 
                >
                    {renderPhim(props.listMovie)}
                </ul>

            </div>
            {/* <WithSelect classnames={"selectPhim"} chooseName = {"Phim"} listSelect={props.listMovie} propsKey={`tenPhim`} /> */}
            {/* <div className="selectPhim dropdown">
                <a
                    className="selectMenu dropdown-toggle"
                    id = "dropdownMenuLink"
                    data-toggle="dropdown"
                >
                    {(state.Phim) ? `${state.Phim}` : "Phim"}
                </a>
                <div className="dropdown-menu selectScroll" aria-labelledby="dropdownMenuLink">
                    {renderPhim()}
                </div>
            </div> */}
            <div className="selectCinema dropdown">
                <div className="selectMenu" data-toggle="dropdown">
                    Rạp
                    </div>
                <ul className="dropdown-menu selectScroll">

                </ul>
            </div>
            <div className="selectDate dropdown">
                <div className="selectMenu" data-toggle="dropdown">
                    Ngày xem
                    </div>
                <ul className="dropdown-menu selectScroll">

                </ul>
            </div>
            <div className="selectSession dropdown">
                <div className="selectMenu" data-toggle="dropdown">
                    Suất Chiếu
                    </div>
                <ul className="dropdown-menu selectScroll">

                </ul>
            </div>
            <div className="buyFast">
                <button className="btn btn-primary">MUA VÉ NGAY</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieInfo : ()=>{

        }
    }
}
