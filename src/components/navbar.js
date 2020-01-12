import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <nav className="navbar navbar-expand-md bg-white justify-content-between align-items-center p-0">
                        {/* Brand */}
                        <a className="navbar-brand pl-3" href="#ab">
                            <img src="./img/web-logo.png" alt="123phim.vn-logo" width="50px" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsibleNavbar"
                        >
                            <img src="./img/menu-options.png" width="30px" alt="toggle-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between align-items-center p-0"
                            id="collapsibleNavbar"
                        >
                            <ul className="navbar-nav navbar-1">
                                <li className="nav-item">
                                    <a className="nav-link" href="#a">
                                        Lịch Chiếu
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#a">
                                        Cụm Rạp
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#a">
                                        Tin Tức
            </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#a">
                                        Ứng Dụng
            </a>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#a">
                                        <img src="./img/avatar.png" alt="login-icons" />
                                        <p className="d-inline-block mb-0">Đăng nhập</p>
                                    </a>
                                </li>
                                {/* Dropdown */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link"
                                        href="#a"
                                        id="navbardrop"
                                        data-toggle="dropdown"
                                    >
                                        <img
                                            className="location-icon"
                                            src="./img/location-header.png"
                                            alt="location-icons"
                                        />
                                        <p className="location-option d-inline-block mb-0">Hồ Chí Minh</p>
                                        <img
                                            className="dropdown-icon"
                                            src="./img/dropdown-icon.png"
                                            alt=""
                                        />
                                    </a>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#a">
                                            Hà Nội
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Đà Nẵng
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Hải Phòng
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Biên Hòa
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Nha Trang
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Bình Dương
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Phan Thiết
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Hạ Long
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Cần Thơ
              </a>
                                        <a className="dropdown-item" href="#a">
                                            Vũng Tàu
              </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Links */}
                    </nav>
                </div>
                <div className="fake-header"></div>
            </div>
        )
    }
}
