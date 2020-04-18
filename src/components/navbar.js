import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logoImg from "../img/web-logo.png";
import menuOptionImg from "../img/menu-options.png";
import avatarImg from "../img/avatar.png";
import locationHeaderImg from "../img/location-header.png";
import dropdownIconImg from "../img/dropdown-icon.png";
import { connect } from "react-redux";
// Material UI import
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    drawerPaper: {
        position: 'absolute',

        whiteSpace: 'nowrap',
        width: '70%',
        right: '0',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: '0',
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    avatar: {
        width: '30px',
        borderRadius: '25px',
        marginRight: '5px',
    },
    loginBtn: {
        flexGrow: 1,
        fontSize: '18px',
        padding: '20px',
        '&:hover' : {
            textDecoration: 'none',
            color: '#000',
        }

    },
    slideMenuItem:{
        listStyleType: "none",
        display: 'block',
        padding: '20px',
        position: 'relative',
        width: 'calc(100% - 40px)',
        fontSize: '18px',
        color: '#000',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover' : {
            textDecoration: 'none',
            color: '#000',
        }
    }


}))
function Navbar(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="header" id="header">
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
                    // data-target="#collapsibleNavbar"
                    >
                        <img
                            src={menuOptionImg}
                            width="30px"
                            alt="toggle-icon"
                            onClick={() => { handleDrawerOpen() }}
                        />
                    </button>
                    <Drawer
                        // variant="permanent"
                        classes={{
                            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                        }}
                        open={open}
                        anchor="right"
                        onClose={handleDrawerClose}
                    >
                        <div className={classes.toolbarIcon}>
                            <div className="nav-link" href="#a">
                                <img src={props.isLogin ? avatarImg : avatarImg} className={classes.avatar} alt="login-icons" />
                                <NavLink to="/login" className="d-inline-block mb-0">{props.isLogin ? `${props.userInfo.hoTen}` : "Đăng nhập"}</NavLink>
                                
                            </div>
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronRightIcon />
                            </IconButton>
                        </div>
                        <ul>
                            <li className={classes.slideMenuItem}>Lịch Chiếu</li>
                            <li className={classes.slideMenuItem}>Cụm Rạp</li>
                            <li className={classes.slideMenuItem}>Tin Tức</li>
                            <li className={classes.slideMenuItem}>Ứng Dụng</li>
                            {props.isLogin ? <li 
                            className={classes.slideMenuItem}
                            >
                                <Link to="/" className="mb-0 logout" onClick={() => { props.userSignOut() }}>Đăng xuất</Link>
                                </li> : ""}
                        </ul>
                        {/* <Divider />
                        <List>{mainListItems}</List>
                        <Divider />
                        <List>{secondaryListItems}</List> */}
                    </Drawer>
                    <div
                        className="collapse navbar-collapse justify-content-between align-items-center p-0"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav navbar-1">
                            <li className="nav-item">
                                <a className="nav-link" href="#catalouge-film">
                                    Lịch Chiếu
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#listBrands">
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
                                    {props.isLogin ? <Link to="/" className="mb-0 logout" onClick={() => { props.userSignOut() }}>Đăng xuất</Link> : ""}
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
        userSignOut: () => {
            let action = {
                type: "USER_SIGN_OUT",
                data: null
            }
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);