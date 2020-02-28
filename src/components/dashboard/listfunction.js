import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ThongKe from "./thongke";
import QuanLyPhim from "./quan-ly-phim";
import QuanLyUser from "./quan-ly-user";
import QuanLyLichChieu from "./quan-ly-lich-chieu";
import EventIcon from '@material-ui/icons/Event';

const listFunction = [
    {
        name: "Dashboard",
        icon: DashboardIcon,
        Component: ThongKe,
    },
    {
        name: "Quản lý Phim",
        icon: MovieFilterIcon,
        Component: QuanLyPhim,
    },
    {
        name: "Quản lý Người dùng",
        icon: AccountBoxIcon,
        Component: QuanLyUser,
    },
    {
        name: "Lịch Chiếu Phim",
        icon: EventIcon,
        Component: QuanLyLichChieu,
    },
]
function ListFunction(props) {
    const renderList= ()=>{
        return listFunction.map((item,index)=>{
            let Icon = item.icon;
            return(
                <ListItem key={index} button onClick={()=>props.click(index)}>
                    <ListItemIcon>
                        <Icon/>
                    </ListItemIcon>
                    <ListItemText primary={item.name}/>
                </ListItem>
            )
        })
    }
    return (
        <div>
            {renderList()}
        </div>
    )
}

export {ListFunction,listFunction};
