import React, { Component } from 'react';
import Slider from 'react-slick';
import PickingFast from "./picking-fast";
import { connect } from "react-redux";
import { actGetListMovieAPI } from "../redux/actions/index.js";
import Movie from "./movie.js";

class CatalougeFilm extends Component {
    componentDidMount() {
        this.props.getListMovie();
    };
    renderHTML = () => {
        let { listMovie } = this.props;
        return listMovie.map((movie, index) => {
            return <Movie key={index} movie={movie} />
        });
    };
    shiftItem = (arr, item) => {
        for (let i = 0; i < item; i++) {
            arr.shift()
        }
    };
    render() {
        // let {listMovie} = this.props;
        const settings = {
            rows: 2,
            slidesPerRow: 4,
            slidesToShow: 1,
        }
        return (
            <div className="selling-list container">
                <PickingFast listMovie={this.props.listMovie} />
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#onSelling">
                            Đang Chiếu
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#comingSoon">
                            Sắp Chiếu
                        </a>
                    </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                    {/* // dang chieu list */}
                    <div className="tab-pane container active" id="onSelling">
                        <Slider {...settings} className="carousel-film">
                            {this.renderHTML()}
                        </Slider>
                    </div>
                    <div className="tab-pane container fade" id="comingSoon">
                        <div id="comingSoonList" className="carousel slide" data-ride="carousel">
                            {/* Indicators */}
                            <ul className="carousel-indicators">
                                <li
                                    data-target="#comingSoonList"
                                    data-slide-to={0}
                                    className="active"
                                />
                                <li data-target="#comingSoonList" data-slide-to={1} />
                            </ul>
                            {/* The slideshow */}
                            <div className="carousel-inner">
                                <div className="carousel-item bg-white active">
                                    <div className="film-list">
                                        <div className="film__item">
                                            <img src="./img/card-31.jpg" width="100%" alt="" />
                                            <h2>Hài Đỏ Và Bảy Chú Lùn - Red Shoes and the Seven Dwarfs</h2>
                                            <span>92 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-32.jpg" width="100%" alt="" />
                                            <h2>Chồng Cũ, Tình Mới - Love, Again</h2>
                                            <span>104 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-33.jpg" width="100%" alt="" />
                                            <h2>Quái Vật Nguyên Sinh - Primal (C18)</h2>
                                            <span>92 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-34.jpg" width="100%" alt="" />
                                            <h2>Vụ Án Thế Kỷ - The Murder of Nicole Brown Simpson (C18)</h2>
                                            <span>93 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-35.jpg" width="100%" alt="" />
                                            <h2>Điệp Viên Ẩn Danh - Spies In Disguise</h2>
                                            <span>97 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-36.jpg" width="100%" alt="" />
                                            <h2>Trẻ Trâu Khởi Nghiệp</h2>
                                            <span>113 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-37.jpg" width="100%" alt="" />
                                            <h2>Cuộc Giải Cứu Hang Tham Laung - The Cave</h2>
                                            <span>103 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-38.jpg" width="100%" alt="" />
                                            <h2>Ván Cờ Sinh Tử - The Divine Move 2: The Wrathful</h2>
                                            <span>107 phút</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="carousel-item bg-white">
                                    <div className="film-list">
                                        <div className="film__item">
                                            <img src="./img/card-39.jpg" width="100%" alt="" />
                                            <h2>Căn Phòng Cám Dỗ - The Room</h2>
                                            <span>103 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-40.jpg" width="100%" alt="" />
                                            <h2>Star Wars: Episode IX - Skywalker Trỗi Dậy</h2>
                                            <span>110 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-41.jpg" width="100%" alt="" />
                                            <h2>Lời Nguyền - The Grudge (C18)</h2>
                                            <span>110 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-42.jpg" width="100%" alt="" />
                                            <h2>One Piece: Lễ Hội Hải Tặc - One Piece: Stampede</h2>
                                            <span>110 phút</span>
                                        </div>
                                        <div className="film__item">
                                            <img src="./img/card-43.jpg" width="100%" alt="" />
                                            <h2>Thí Nghiệm Xác Sống - Patients of A Saint</h2>
                                            <span>135 phút</span>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                            {/* Left and right controls */}
                            <a
                                className="carousel-control-prev arrow-left"
                                href="#comingSoonList"
                                data-slide="prev"
                            >
                                <img src="./img/back-session.png" width="50px" alt="back" />
                            </a>
                            <a
                                className="carousel-control-next arrow-right"
                                href="#comingSoonList"
                                data-slide="next"
                            >
                                <img src="./img/next-session.png" width="50px" alt="next" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
            dispatch(actGetListMovieAPI());
        }
    }
}
const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CatalougeFilm);