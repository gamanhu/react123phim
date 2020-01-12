import React, { Component } from 'react'
import {connect} from "react-redux"
export default class SuatChieu extends Component {
    


    render() {
        console.log(this.props.listMovie);
        return (
            <div className="tab-pane fade active show" id={`${this.props.maRap}`}>
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
    }
}
