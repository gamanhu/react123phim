import React, { Component } from "react";
// import "../../../node_modules/easy-pie-chart-master/dist/jquery.easypiechart";
import { connect } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import * as action from "../../redux/actions/index";
import "react-circular-progressbar/dist/styles.css";
import DetailShowtime from "./detail-showtime";

import $ from "jquery";
import { exists } from "fs";
class DetailMovie extends Component {
  componentDidMount() {
    $(document).ready(function() {
      $(this).scrollTop(0);
    });
    let id = this.props.match.params.id;
    this.props.gettimeMovie(id);
    this.props.getListLogo();
    this.props.getHeThongRap("BHDStar");
    this.props.getHeThongRap("Galaxy");
    this.props.getHeThongRap("CGV");
    this.props.getHeThongRap("CineStar");
    this.props.getHeThongRap("LotteCinima");
    this.props.getHeThongRap("MegaGS");
  }
  makeid = length => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  //Ham tim vi tri Rap trong mang
  findIndex = (danhSachCacRap, ten) => {
    let vitriMang = -1;
    for (let i = 0; i < danhSachCacRap.length; i++) {
      for (let j = 0; j < danhSachCacRap[i].length; j++) {
        if (danhSachCacRap[i][j].tenCumRap.indexOf(ten) !== -1) {
          vitriMang = i;
          return vitriMang;
        }
      }
    }
    return -1;
  };
  //Render thong tin lich chieu phim thong qua di cua phim
  renderShowTimes = (maHeThongRap, ten, danhSachCacRap, listLogo) => {
    // this.props.getHeThongRap(maHeThongRap);
    if (danhSachCacRap.length > 5) {
      let name = "",
        address = "";
      let urlLogo = "";
      for (let i = 0; i < listLogo.length; i++) {
        if (listLogo[i].maHeThongRap === maHeThongRap) {
          urlLogo = listLogo[i].logo;
          break;
        }
      }
      if (this.findIndex(danhSachCacRap, ten) !== -1) {
        let vitridanhsach = this.findIndex(danhSachCacRap, ten);
        if (this.props.movie.lichChieu) {
          //Duyet xem rap do co trong mang lich chieu hay khong
          let arr = [...this.props.movie.lichChieu];
          let dem = 0;
          for (let k = 0; k < danhSachCacRap[vitridanhsach].length; k++) {
            for (let l = 0; l < arr.length; l++) {
              if (
                danhSachCacRap[vitridanhsach][k].maCumRap ===
                arr[l].thongTinRap.maCumRap
              ) {
                dem++;
              }
            }
          }
          if (dem === 0) {
            return <p>Xin lỗi rạp hiện tại không chiếu phim này!!!</p>;
          } else {
            return this.props.movie.lichChieu.map(item => {
              for (
                let index = 0;
                index < danhSachCacRap[vitridanhsach].length;
                index++
              ) {
                if (
                  item.thongTinRap.maCumRap ===
                  danhSachCacRap[vitridanhsach][index].maCumRap
                ) {
                  name = danhSachCacRap[vitridanhsach][index].tenCumRap;
                  address = danhSachCacRap[vitridanhsach][index].diaChi;
                  let maLichChieu = item.maLichChieu;
                  return (
                    <DetailShowtime
                      key={this.makeid(6)}
                      logo={urlLogo}
                      maLichChieu={maLichChieu}
                      name={name}
                      address={address}
                      movie={item}
                    />
                  );
                }
              }
            });
          }
        }
      }
    }
  };
  //Make url youtube == emeb
  makeUrlEmeb = url => {
    // console.log(typeof(url));
    if (url !== undefined) {
      let mainstring = url;
      // console.log(mainstring)
      let str = mainstring.replace("watch?v=", "embed/");
      // console.log(str);
      return str;
    }
  };
  //Render start following rate
  renderStar = rate => {
    let length = rate / 10 / 2;
    var randoms = Array.from({ length: length }, () =>
      Math.floor(Math.random() * 10)
    );
    return randoms.map(item => {
      return (
        <i
          key={this.makeid(100)}
          className="fas fa-star"
          style={{ color: "#FB4226" }}
        />
      );
    });
  };
  // Check img src serve
 imageExists = (url) =>{

    var image = new Image();

    image.src = url;

    if (!image.complete) {
        return false;
    }
    else if (image.height === 0) {
        return false;
    }
    console.log(image)
    return true;
}
  checkImage = (image_url) => {

    // let hinhAnh = "";
    // var http = new XMLHttpRequest();
    // http.open("HEAD", image_url, false);
    // http.send();
    // if (http.status == 404) {
    //   hinhAnh = "../../img/poster-dang-cap-nhat.jpg";
    // } else {
    //   hinhAnh = image_url;
    // }
    // return hinhAnh;
  };
  render() {
    let { movie, danhSachCacRap, listLogo } = this.props;
    if (movie && danhSachCacRap.length > 5 && listLogo) {
      let rate = (movie.danhGia * 100) / 5;
      return (
        <div
          className="detail-movie"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.808), rgba(0, 0, 0, 0.774)),url(${movie.hinhAnh})`
          }}
        >
          <div className="content">
            <div className="intro-movie">
              <div className="flex justify-content-center">
                <div className="left">
                  <img
                    src={this.imageExists(movie.hinhAnh) ? movie.hinhAnh : require("../../img/poster-dang-cap-nhat.jpg") }
                    alt=""
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
                      {movie.maNhom}
                    </span>{" "}
                    <span>{movie.tenPhim}</span>
                  </p>
                  <p>
                    120 phút - {`${rate / 10 / 2}.${rate % 10}`} IMDb -
                    2D/Digital
                  </p>
                  <button type="button" className="btn btn-danger">
                    <a
                      className="toLichChieu"
                      onClick={() => {
                        alert("Vui lòng chọn rạp bên dưới!!!");
                      }}
                    >
                      Mua vé
                    </a>
                  </button>
                </div>
                <div className="right">
                  <CircularProgressbar
                    value={rate}
                    text={`${rate / 10 / 2}.${rate % 10}`}
                    strokeWidth={5}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textSize: "2.4rem",
                      pathColor: `#7ed321`,
                      textColor: "#fff",
                      trailColor: "#757575",
                      backgroundColor: "#c82333"
                    })}
                  />
                  <div className="star">{this.renderStar(rate)}</div>
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
              <div
                className="lichChieu tab-pane container active"
                id="lichchieu"
              >
                <div className="row">
                  {/* Nav tabs */}
                  <div className="col-sm-4 removepadding">
                    <ul className="nav nav-tabs cinemal cinemal1">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#BHD"
                        >
                          <img
                            src="http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png"
                            alt=""
                          />
                          <span>BHD Star Cineplex</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#GC">
                          <img
                            src="http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png"
                            alt=""
                          />
                          <span>Galaxy Cinema</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#CGV">
                          <img
                            src="http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png"
                            alt=""
                          />
                          <span>CGV</span>
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#CS">
                          <img
                            src="http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png"
                            alt=""
                          />
                          <span>CineStar</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#LC">
                          <img
                            src="http://movie0706.cybersoft.edu.vn/hinhanh/megags.png"
                            alt=""
                          />
                          <span>Lotte Cinema</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#MG">
                          <img
                            src="http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png"
                            alt=""
                          />
                          <span>Mega GS</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Tab panes */}
                  <div className="col-sm-8 removepadding">
                    <div className="tab-content">
                      <div className="tab-pane container fade active" id="BHD">
                        {this.renderShowTimes(
                          "BHDStar",
                          "BHD",
                          danhSachCacRap,
                          listLogo
                        )}
                      </div>
                      <div className="tab-pane container fade" id="GC">
                        {this.renderShowTimes(
                          "Galaxy",
                          "GLX",
                          danhSachCacRap,
                          listLogo
                        )}
                      </div>
                      <div className="tab-pane container fade" id="CGV">
                        {this.renderShowTimes(
                          "CGV",
                          "CGV",
                          danhSachCacRap,
                          listLogo
                        )}
                      </div>
                      <div className="tab-pane container fade" id="CS">
                        {this.renderShowTimes(
                          "CineStar",
                          "CNS",
                          danhSachCacRap,
                          listLogo
                        )}
                      </div>
                      <div className="tab-pane container fade" id="LC">
                        {this.renderShowTimes(
                          "LotteCinima",
                          "Lotte",
                          danhSachCacRap,
                          listLogo
                        )}
                      </div>
                      <div className="tab-pane container fade" id="MG">
                        {this.renderShowTimes(
                          "MegaGS",
                          "MegaGS",
                          danhSachCacRap,
                          listLogo
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="thongtinPhim tab-pane container fade"
                id="thongtin"
              >
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Mô tả</h4>
                    <p>{movie.moTa}</p>
                  </div>
                  <div className="col-sm-6">
                    <h4>Trailer :</h4>
                    <iframe
                      width={370}
                      height={345}
                      // sau /com phai co cum tu embed/ bo watchv=?
                      src={this.makeUrlEmeb(movie.trailer)}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <h1 className="text-center">Page Loading!!! Please Wait a Minute.</h1>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gettimeMovie: id => {
      dispatch(action.actGetDetailMovie(id));
    },
    getHeThongRap: maHeThongRap => {
      dispatch(action.actGetShowTimes(maHeThongRap));
    },
    getListLogo: () => {
      dispatch(action.actGetListLogo());
    }
  };
};
const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie,
    danhSachCacRap: state.movieReducer.danhSachCacRap,
    listLogo: state.movieReducer.listLogo
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
