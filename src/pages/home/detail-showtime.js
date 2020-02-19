import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class DetailShowtime extends Component {
    render() {
        let {maLichChieu} = this.props;
        return (
            <div className="detail_Show_time">
                <div className="d-flex mt-4">
              <div>
                <img src={this.props.logo}/>
              </div>
              <div className="right">
                <p className="nameCinema">{this.props.name}</p>
                <p className="addressCinema">{this.props.address}</p>
              </div>
            </div>
            <div>
              Ngày công chiếu : {new Date(this.props.movie.ngayChieuGioChieu).toLocaleDateString('en-GB')}
            </div>
            <div className="btnGroup mt-3">
              <button>
                <NavLink to={`/booking/${maLichChieu}`}>{new Date(this.props.movie.ngayChieuGioChieu).toLocaleTimeString()}</NavLink>
              </button>
            </div>
            </div>
        )
    }
}
