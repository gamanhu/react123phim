import React, { Component } from "react";
// import PickingPlace from "../home/picking-place";
import "../../../node_modules/easy-pie-chart-master/dist/jquery.easypiechart";
import { connect } from "react-redux";
import * as action from "../../redux/actions/index";
import $ from "jquery";
class DetailMovie extends Component {
  componentDidMount() {
    $(function () {
      $(".chart").easyPieChart({
        // trackColor: false,
        lineWidth: 10,
        barColor: "#7ED321",
        trackColor: "#3A3A3A",
        size: 130,
        scaleLength: false
      });
    });
    let id = this.props.match.params.id;
    this.props.gettimeMovie(id);
    this.props.getHeThongRap('BHDStar');
  }
  //Render thong tin lich chieu phim thong qua di cua phim
  renderShowTimes = maHeThongRap => {
    let { movie, danhSachCacRap } = this.props;
    console.log(movie);
    console.log(danhSachCacRap);

  };
  //LAYOUT SHOW TIMES
  /**
    //               <div className="d-flex mt-4">
    //               <div>
    //                 <img src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-3-2-15379527367766.jpg"/>
    //               </div>
    //               <div className="right">
    //                 <p className="nameCinema">{rap.tenCumRap}</p>
    //                 <p className="addressCinema">{rap.diaChi}</p>
    //               </div>
    //             </div>
    //             <div className="btnGroup mt-3">
    //           <button type="button" class="btn btn-primary"> {new Date(lichchieu.ngayChieuGioChieu).toLocaleTimeString()} ~ {new Date(lichchieu.ngayChieuGioChieu).toLocaleTimeString()}</button>
    //             </div>
    */
  render() {
    let { movie } = this.props;
    return (
      <div
        className="detail-movie"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.808), rgba(0, 0, 0, 0.774)),url(${movie.hinhAnh})`
        }}
      >
        <div className="content">
          <div className="intro-movie">
            <div className="d-flex justify-content-center">
              <div className="left">
                <img
                  src={movie.hinhAnh}
                  alt="21eq"
                  style={{ height: 340, width: 215 }}
                />
              </div>
              <div className="center">
                <p>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</p>
                <p>
                  <span
                    style={{
                      backgroundColor: "#FB4226",
                      padding: "3px 6px",
                      borderRadius: 5
                    }}
                  >
                    C16
                  </span>{" "}
                  <span>{movie.tenPhim}</span>
                </p>
                <p>110 phút - 0 IMDb - 2D/Digital</p>
                <button type="button" className="btn btn-danger">
                  Mua vé
                </button>
              </div>
              <div className="right">
                <div
                  className="chart"
                  data-percent={73}
                  data-scale-color="#ffb400"
                >
                  <span>7.3</span>
                </div>
                <div className="star">
                  <i className="fas fa-star" style={{ color: "#FB4226" }} />
                  <i className="fas fa-star" style={{ color: "#FB4226" }} />
                  <i className="fas fa-star" style={{ color: "#FB4226" }} />
                  <i className="fas fa-star" style={{ color: "#FB4226" }} />
                  <i className="fas fa-star" style={{ color: "#FB4226" }} />
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs navTab01 d-flex justify-content-center justify-item-center mt-5">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#lichchieu"
              >
                Lịch Chiếu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tab" href="#thongtin">
                Thông Tin
              </a>
            </li>
          </ul>
          {/* Tab panes */}
          <div className="tab-content tab02">
            <div className="tab-pane container active" id="lichchieu">
              <div className="row">
                {/* Nav tabs */}
                <div className="col-sm-4 removepadding">
                  <ul className="nav nav-tabs cinemal">
                    <li
                      className="nav-item"
                    >
                      <a className="nav-link" data-toggle="tab" href="#BHD">
                        <img
                          src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
                          alt=""
                        />
                        BHD Star Cineplex
                      </a>
                    </li>
                    <li
                      className="nav-item"
                    >
                      <a className="nav-link" data-toggle="tab" href="#GC">
                        <img
                          src="http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"
                          alt=""
                        />
                        Galaxy Cinema
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#CGV"
                      >
                        <img
                          src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"
                          alt=""
                        />
                        CGV
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#CS">
                        <img
                          src="http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png"
                          alt=""
                        />
                        CineStar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#LC">
                        <img
                          src="http://movie0706.cybersoft.edu.vn/hinhanh/megags.png"
                          alt=""
                        />
                        Lotte Cinema
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#MG">
                        <img
                          src="http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
                          alt=""
                        />
                        Mega GS
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Tab panes */}
                <div className="col-sm-8 removepadding">
                  <div className="tab-content">
                    <div className="tab-pane container fade active" id="BHD">
                      {this.renderShowTimes('BHD Star')}
                    </div>
                    <div className="tab-pane container fade" id="GC">
                      ...3
                    </div>
                    <div className="tab-pane container fade" id="CGV">
                      ...1
                    </div>
                    <div className="tab-pane container fade" id="CS">
                      ...4
                    </div>
                    <div className="tab-pane container fade" id="LC">
                      ...5
                    </div>
                    <div className="tab-pane container fade" id="MG">
                      ...6
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane container fade" id="thongtin"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gettimeMovie: id => {
      dispatch(action.actGetDetailMovie(id));
    },
    getHeThongRap: maHeThongRap => {
      dispatch(action.actGetShowTimes(maHeThongRap));
    }
  };
};
const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie,
    danhSachCacRap: state.movieReducer.danhSachCacRap
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
