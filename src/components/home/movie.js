import React from 'react';
// import Slider from "react-slick";
import {NavLink} from "react-router-dom";
import onUpdatePoster from "../../img/poster-dang-cap-nhat.jpg";
import playBtn from "../../img/play-button.png";
import {connect} from "react-redux";
// import * as action from "../../redux/actions/index";
import {PUT_TRAILER_SRC} from "../../redux/constants/action-types";


function Movie(props) {
    const [srcImg, setSrc] = React.useState({
        src: props.movie.hinhAnh,
        error: false
    });
    const handleError = () =>{
        if(!srcImg.error){
            setSrc({
                src:onUpdatePoster,
                error:true,
            })
        }
    }
    let { movie } = props;
    console.log(props);
    let id = movie.maPhim;
        return (
            <div className="film__item">
                <div className="film-thumbnail">
                    <img src={srcImg.src} onError={()=>handleError()} alt="" />
                    <div className="hoverInfo">
                        <button className="playTrailer" onClick={()=>{
                            props.pushTrailerSrc(movie.trailer);
                            props.openModal();
                        }}>
                            <img src={playBtn} alt="" />
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
const mapDispatchToProps = dispatch => {
    return{
        pushTrailerSrc : (trailer) => {
            dispatch({
                type: PUT_TRAILER_SRC,
                trailer
            })
        }
    }
}
export default connect (null,mapDispatchToProps)(Movie);
