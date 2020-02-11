import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
// // import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge'; // cái hình tròn có sẵn border-radius
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

// import Dashboard2 from "../../components/dashboard/Dashboard"
import { connect } from "react-redux";

// const useStyles = makeStyles(theme => {
//     console.log(theme);
//     return ({
//         'left-navbar': {
//             background: 'linear-gradient(0deg,#614385, #516395 )',
//             height: "100vh",
//             width: "20%",
//             boxShadow: '0 0 15px rgba(0,0,0,.3);',
//             position: 'fixed'
//         },
//         dashBoard: {
//             color: 'white',
//             padding: '20px'

//         },
//         userInfo: {
//             textAlign: 'center',
//             // margin: '20px 20px'
//             borderBottom: '1px dashed #e9e9e9',
//         },
//         avatarImg: {
//             width: '50px',
//             borderRadius: '30px',
//             marginRight: '5px',
//             marginBottom: '5px',
//             zIndex: '1000'
//         },
//         userInfo: {
//             textAlign: 'center',
//             // margin: '20px 20px'
//             borderBottom: '1px dashed #e9e9e9',
//         },
//         manageBox: {
//             padding: '10px 0',
//             display: 'flex',
//             justifyContent: 'center',
//             borderBottom: '1px solid #e9e9e9',
//         },
//         boxTitle: {
//             marginBottom: '0',
//             color: '#e9e9e9'
//         }

//     })
// }
// )
const drawerWidth = 240;
const useStyles = makeStyles(theme => {
    console.log(theme);
    return ({
        content: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            })
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
            background: 'linear-gradient(270deg,#614385, #516395 )'
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
            display: 'none',
        },
        title: {
            flexGrow: 1,
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
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
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            // padding: '7px 8px',
            ...theme.mixins.toolbar,
        },
        adminName: {
            fontSize: '15px',
            flexGrow: 1,
            paddingLeft: '12px'

        }
    })
});


function Dashboard(props) {
    const [open, setOpen] = React.useState(true);
    const classes = useStyles();
    const Components = [];
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => setOpen(false);
    return (
        <div className={classes.content}>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.adminName}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent" // Drawer có biến variant permanent này để giúp background ko mờ khi mở ngăn kéo này ra
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose), // cái này tại sao lại có paper: vẫn chưa hiểu đc
                }} // có thể paper là một thuộc tính của Drawer giúp cho nó có thể không bị dính thanh nav-icon kế bên khi đóng, bỏ paper thì 
                // bỏ paper sẽ làm cái drawer này là một thanh công cụ chứ không phải 1 div ok?
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <Typography component="h2" color="inherit" className={classes.adminName}>
                        {`Xin chào, ${props.adminInfo.hoTen.split(' ')[0]}!`}
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider/>
                <List></List>
            </Drawer>
        </div>

        // <div>
        //     <div className={classes["left-navbar"]}>
        //         <div className={classes.dashBoard}>
        //             <div className={classes.userInfo}>

        //                 <img
        //                     className={classes.avatarImg}
        //                     src={"../../img/avatar.png"}
        //                     alt="user-img"
        //                 // src={avatarIcon}
        //                 />
        //                 <p><p style={{ 'margin': '0' }}>Xin Chào,</p>{props.adminInfo.hoTen}</p>
        //             </div>
        //             <div className={classes.manageBox}>
        //                 <p className={classes.boxTitle}>Thêm người dùng</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <Dashboard2/>
    )
}

const mapStateToProps = state => {
    return {
        adminInfo: state.userReducer.userInfo,
        isLoginAdmin: state.userReducer.isLoginAdmin
    }
}
export default connect(mapStateToProps, null)(Dashboard);
