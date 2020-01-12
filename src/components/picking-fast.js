import React, { Component } from 'react'

export default class PickingFast extends Component {
    render() {
        return (
            <div className="selling-fast">
                <div className="selectPhim dropdown">
                    <div className="selectMenu" data-toggle="dropdown">
                        Phim
                            </div>
                    <ul className="dropdown-menu selectScroll">

                    </ul>
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
}
