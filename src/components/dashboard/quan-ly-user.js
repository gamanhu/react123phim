import React from 'react'
import { connect } from "react-redux";
import * as action from "../../redux/actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import { TableHead, TableCell, TableBody,
    TableRow, Table, Paper, Grid, Typography, Button, TextField
} from '@material-ui/core';
import ModalUser from "./modal-user";
import IsLoading from "../booking/is-loading";
import Pagination from '@material-ui/lab/Pagination';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 500,
    },
    scrollBar: {
        '&::-webkit-scrollbar-track': {
            border: 'none',
            padding: '2px 0',
            backgroundColor: '#d1d0d0',
        },
        '&::-webkit-scrollbar': {
            width: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '5px',
            boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#949191',
            // border: 1px solid #000;
        }
    },
    head: {
        position: "sticky",
        top: '-20px',
        backgroundColor: '#fff',
        zIndex: '1101',
    },
    addPhimBtn: {
        backgroundColor: "#0fb726",
        outline: 0,
        marginBottom: theme.spacing(2),
    },
    title: {
        display: 'flex',
        // alignsItem:'center',
    },
    searchBar: {
        // // height:'20px',
        // padding:'10px'
        flexGrow: 1,
        marginBottom: 0,
    },
    boxTitle: {
        // flexGrow: 1,
        marginBottom: 0,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 0,
    }, 
    paperFade: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    colorRow:{
        backgroundColor:'#e9e9e9'
    }

}))
function QuanLyUser(props) {
    const classes = useStyles();
    const [keyWord, setkeyWord] = React.useState('');
    const [open, setOpen] = React.useState({
        onOpen: false,
        onEdit: {},
    }); 
    const [loading,setLoading] = React.useState(false);
    const [page,setPage] = React.useState(1);
    const [totalPage,setTotal] = React.useState(0)
    const handleOpen = (user = false) => {
        setOpen({
            ...open,
            onOpen: true,
            onEdit: user
        });
    };
    const chunkify = (a, n, balanced) => {
        if (n < 2)
            return [a];

        let len = a.length,
            out = [],
            i = 0,
            size;

        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }

        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }

        else {

            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));

        }

        return out;
    }

    const handleClose = () => {
        setOpen({
            ...open,
            onOpen: false,
            onEdit: false,
        });
    };
    React.useEffect(() => {
        if (!props.listUser.length > 0) {
            props.getListUser();
        } else {
            let total = chunkify(props.listUser,20,20);
            setTotal(total.length);
            setLoading(true);
        }
        console.log(props);

    }, [props]);
    const renderTable = (pagination,keyW) => {
        let listUser2;
        if(keyW === ''){
            listUser2 = chunkify(props.listUser,20,20);
            listUser2 = listUser2[pagination-1]; 
        } else {
            listUser2 = props.listUser.filter(item => {
                return item.taiKhoan.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
            });

        }
        if(listUser2 && listUser2.length>0){
            return listUser2.map((user, index) => {
                return (
                    <TableRow key={index} className={index%2 != 1?``:classes.colorRow}>
                        <TableCell>{user.taiKhoan}</TableCell>
                        <TableCell>{user.hoTen}</TableCell>
                        <TableCell>{user.maLoaiNguoiDung}</TableCell>
                        <TableCell align="right">
                            <Button variant="contained" color="primary" onClick={() => handleOpen(user)}>
                                Sửa
                            </Button>
    
                        </TableCell>
                    </TableRow>
                )
            })

        }
    }
    const handleOnChange = (e) => {
        let searchContent = e.target.value;
        setkeyWord(searchContent);

    }
    const handleChangePage = (e,value) => {
        let pagina = value
        setPage(pagina);
    }
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.scrollBar);
    if(loading){
        return (
            <div>
                <Button variant="contained" className={classes.addPhimBtn} onClick={()=>handleOpen()}>
                    + Thêm Người Dùng
                </Button>
                <ModalUser open={open.onOpen} close={handleClose} userEdit={open.onEdit} />
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <Paper className={fixedHeightPaper}>
                            <div >
                                <Typography component="h2" variant="h6" color="primary" className={classes.boxTitle} >
                                    Danh Sách Người Dùng
                            </Typography>
                            <div className={classes.title}>
                                <Pagination onChange={handleChangePage} className={classes.searchBar} count = {totalPage} showFirstButton showLastButton/>
                                <TextField onChange={handleOnChange} className={classes.searchBar} id="outlined-basic" label="Tìm kiếm người dùng (theo tài khoản)" />

                            </div>
    
                            </div>
                            <Table size="small">
                                <TableHead >
                                    <TableRow >
                                        <TableCell className={classes.head}>Tài Khoản</TableCell>
                                        <TableCell className={classes.head}>Họ Tên</TableCell>
                                        <TableCell className={classes.head}>Phân Loại</TableCell>
                                        <TableCell className={classes.head} align="right">Hành Động</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className={classes.fixedHeight}>
                                    {renderTable(page,keyWord)}
    
                                </TableBody>
                            </Table>
    
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
        
    } else {
        return (
            <IsLoading/>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getListUser: () => {
            dispatch(action.actGetListUserAPI());
        },
    }
}
const mapStateToProps = state => {
    return {
        listUser: state.userReducer.listUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyUser);
