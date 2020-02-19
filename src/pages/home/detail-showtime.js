import React, { Component } from 'react'

export default class DetailShowtime extends Component {
    render() {
        return (
            <div>
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
              <button type="button" className="btn btn-primary">{new Date(this.props.movie.ngayChieuGioChieu).toLocaleTimeString()}</button>
            </div>
            </div>
        )
    }
}
