import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ThongKe from "../../components/dashboard/thongke";
import { connect } from "react-redux";
import {ListFunction,listFunction} from "../../components/dashboard/listfunction";
const drawerWidth = 240;
const useStyles = makeStyles(theme => {
    console.log(theme);
    return ({
        content1: {
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
            background: 'linear-gradient(300deg, #d4fc79 0%, #96e6a1 100%)',
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
            position: 'relative', //must have relative position to not being overlay the right content
            whiteSpace: 'nowrap',
            background: 'linear-gradient(0deg, #d4fc79 0%, #96e6a1 100%)',
            height: '100vh',
            // background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
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
            padding: '0px 8px',
            ...theme.mixins.toolbar,
        },
        adminName: {
            fontSize: '15px',
            flexGrow: 1,
            paddingLeft: '12px'

        },
        appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },

        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
        },
        fixedHeight: {
            height: 240,
        },
    })
});


function Dashboard(props) {
    const [open, setOpen] = React.useState(true);
    // const [noidung,setNoiDung] = React.useState({Component:ThongKe});
    const [indexList,setIndex] = React.useState(0);
    const classes = useStyles();
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => setOpen(false);
    const handleOnClick = (index)=>{
        setIndex(index);
    }
    const renderNoiDung = () =>{
        return listFunction.map((item,index)=>{
            if(indexList === index){
                let Component = item.Component;
                return(
                    <Component key={index}/>
                )
            }
            
        })
    }
    return (
        <div className={classes.content1}>
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
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {listFunction[indexList].name}
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
                <Divider />
                <List>
                    <ListFunction click={handleOnClick} />
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {/* <ThongKe /> */}
                    {/* {renderComponent()} */}
                    {/* {<Component/>} */}
                    {renderNoiDung()}
                </Container>

            </main>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        adminInfo: state.userReducer.userInfo,
        isLoginAdmin: state.userReducer.isLoginAdmin
    }
}
export default connect(mapStateToProps, null)(Dashboard);
