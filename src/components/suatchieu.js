import React from 'react';

// import { connect } from "react-redux";
export default function SuatChieu(props) {
    
    if(props.listMovieBrand && props.listMovieBrand.length>0){
        let {maCumRap} = props.listMovieBrand[0].lstCumRap[0];
        console.log(maCumRap);
    }
    
    if(props.listBranchHaveMovie && props.listBranchHaveMovie.length>0){
        if (props.listBranchHaveMovie.includes(props.maCumRap)) {
            return (
                <div className={`tab-pane fade ${(props.active ? "active show" : "")}`} id={`${props.maCumRap}`}>
                    <div className="movie-item">
                        <div className="movie-detail">
                            <img
                                src="./img/cgv-cresentmall.jpg"
                                width="50px"
                                alt="cgv-cresenmall"
                            />
                            <div className="movie-item__detail">
                                <h5>CGV - Cresent Mall</h5>
                                <p>Địa chỉ</p>
                            </div>
                        </div>
                        <div className="start-time">
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <div className="clear" />
                        </div>
                    </div>
                    <div className="movie-item">
                        <div className="movie-detail">
                            <img
                                src="./img/cgv-cresentmall.jpg"
                                width="50px"
                                alt="cgv-cresenmall"
                            />
                            <div className="movie-item__detail">
                                <h5>CGV - Cresent Mall</h5>
                                <p>Địa chỉ</p>
                            </div>
                        </div>
                        <div className="start-time d-block">
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <a href="/">
                                <span>10:30</span>~12:27
                                </a>
                            <div className="clear" />
                        </div>
                    </div>
                </div>
            )
        } else {
            
            return (
                <div className={`tab-pane fade ${(props.active ? "active show" : "")}`} id={`${props.maCumRap}`} >
                    <h2>Không có suất chiếu nào</h2>
                </div>
            )
        }
    } else {
        return(
            <div></div>
        )
    }
    
}
