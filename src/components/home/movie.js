import React from 'react';
// import Slider from "react-slick";
import {NavLink} from "react-router-dom";

export default function Movie(props) {

    let { movie } = props;
    let id = movie.maPhim;
        return (
            <div className="film__item">
                <div className="film-thumbnail">
                    <img src={movie.hinhAnh} alt="" />
                    <div className="hoverInfo">
                        <button className="playTrailer">
                            <img src="./img/play-button.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="film-detail">
                    <h2>{movie.tenPhim}</h2>
                    <span>117 phút</span>
                    <div className="hoverBtn">
                        <NavLink to={`/detail-movie/${id}`} className="btnMua">
                            MUA VÉ
                        </NavLink>
                    </div>
                </div>
            </div>
        )
}
