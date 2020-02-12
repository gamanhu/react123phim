import React from 'react'
import { connect } from "react-redux";
import * as action from "../../redux/actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
    addPhimBtn:{
        backgroundColor: "#0fb726",
        outline:0,
        marginBottom: theme.spacing(2),
    },
    title:{
        display:'flex',
        // alignsItem:'center',
    },
    searchBar:{
        // // height:'20px',
        // padding:'10px'
        flexGrow:1,
        marginBottom: 0,
    },
    boxTitle:{
        flexGrow:1,
        marginBottom:0,
    }

}))



function QuanLyPhim(props) {
    const classes = useStyles();
    const [keyWord,setkeyWord] = React.useState('');
    React.useEffect(()=>{
        if(!props.listMovie.length>0){
            props.getListMovie();

        }
        console.log(props);

    },[props]);
    const renderTable = (listMovie)=>{
        let listMovie2 = listMovie.filter(item=>{
            return item.tenPhim.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        }) ;
        return listMovie2.map((movie, index) =>{
            return (
                <TableRow key={index}>
                    <TableCell>{movie.maPhim}</TableCell>
                    <TableCell>{movie.tenPhim}</TableCell>
                    <TableCell>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</TableCell>
                    <TableCell>{movie.danhGia}</TableCell>
                    <TableCell align="right">
                        <Button variant="contained" color="primary">
                            Sửa
                        </Button>
                    </TableCell>
                </TableRow>
            )
        })
    }
    const handleOnChange = (e) => {
        let searchContent = e.target.value;
        setkeyWord(searchContent);

    }
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.scrollBar);
    return (
        <div>
            <Button variant="contained" className={classes.addPhimBtn}>
                + Thêm Phim Mới
            </Button>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper className={fixedHeightPaper}>
                        <div className={classes.title}>
                        <Typography component="h2" variant="h6" color="primary" className={classes.boxTitle} >
                            Danh Sách Phim
                        </Typography>
                        <TextField onChange={handleOnChange} className={classes.searchBar} id="outlined-basic" label="Tìm kiếm phim (theo tên)"  />

                        </div>
                        <Table size="small">
                            <TableHead >
                                <TableRow >
                                    <TableCell className={classes.head}>Mã Phim</TableCell>
                                    <TableCell className={classes.head}>Tên Phim</TableCell>
                                    <TableCell className={classes.head}>Ngày Khởi Chiếu</TableCell>
                                    <TableCell className={classes.head}>Đánh Giá</TableCell>
                                    <TableCell className={classes.head} align="right">Hành Động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.fixedHeight}>
                                {renderTable(props.listMovie)}
                            </TableBody>
                        </Table>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        getListMovie: () => {
            dispatch(action.actGetListMovieAPI());
        }
    }
}
const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyPhim);


