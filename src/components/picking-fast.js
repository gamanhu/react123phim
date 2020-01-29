import React from 'react'
// import { NavLink } from "react-router-dom";
export default function PickingFast(props) {

    const renderPhim = () => {
        console.log(props.listMovie);
        return props.listMovie.map((movie, index) => {
            return (
                <option key={index} value="movie.maPhim">
                    {movie.tenPhim}
                </option>
            )
        })
    }

    return (
        <div className="selling-fast">
            <div className="selectPhim dropdown">
                <select className="selectMenu" 
                >
                    <option value="">Phim</option>
                    {renderPhim()}
                </select>
                
            </div>
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
