import React from 'react';
import { NavLink,Link } from "react-router-dom";
import logoImg from "../img/web-logo.png";
import menuOptionImg from "../img/menu-options.png";
import avatarImg from "../img/avatar.png";
import locationHeaderImg from "../img/location-header.png";
import dropdownIconImg from "../img/dropdown-icon.png";
import { connect } from "react-redux";
function Navbar(props) {
    console.log(props.isLogin);
    // const handleSignOut = ()=>{
    //     localStorage.setItem("UserLogin","");
    //     return(
    //         <Redirect to="/"/>
    //     )
    // }
    return (
        <div>
            <div className="header">
                <nav className="navbar navbar-expand-md bg-white justify-content-between align-items-center p-0">
                    {/* Brand */}
                    <NavLink className="navbar-brand pl-3" to="/">
                        <img
                            src={logoImg}
                            alt="123phim.vn-logo"
                            width="50px" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <img
                            src={menuOptionImg}
                            width="30px"
                            alt="toggle-icon" />
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
                                <div className="nav-link" href="#a">
                                    <img src={props.isLogin ? avatarImg : avatarImg} alt="login-icons" />
                                    <NavLink to="/login" className=" signin__btn d-inline-block mb-0">{props.isLogin ? `${props.userInfo.hoTen}` : "Đăng nhập"}</NavLink>
                                    {props.isLogin ? <Link to="/" className="mb-0 logout" onClick={()=>{props.userSignOut()}}>Đăng xuất</Link> : ""}
                                </div>
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
                                        src={locationHeaderImg}
                                        alt="location-icons"
                                    />
                                    <p className="location-option d-inline-block mb-0">Hồ Chí Minh</p>
                                    <img
                                        className="dropdown-icon"
                                        src={dropdownIconImg}
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

const mapStateToProps = state => {
    return {
        userInfo: state.userReducer.userInfo,
        isLogin: state.userReducer.isLogin,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userSignOut : () => {
            let action = {
                type: "USER_SIGN_OUT",
                data: null
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);