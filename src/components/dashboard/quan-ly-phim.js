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
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}))


function QuanLyPhim(props) {
    const classes = useStyles();
    React.useEffect(() => {
        props.getListMovie();
    }, [])
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper className={fixedHeightPaper}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                            Danh Sách Phim
                        </Typography>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Mã Phim</TableCell>
                                    <TableCell>Tên Phim</TableCell>
                                    <TableCell>Ngày Khởi Chiếu</TableCell>
                                    <TableCell>Đánh Giá</TableCell>
                                    <TableCell align="right">Hành Động</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.listMovie.map((movie,index) => (
                                    <TableRow key={index}>
                                        <TableCell>{movie.maPhim}</TableCell>
                                        <TableCell>{movie.tenPhim}</TableCell>
                                        <TableCell>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</TableCell>
                                        <TableCell>{movie.danhGia}</TableCell>
                                        <TableCell align="right">{movie.maPhim}</TableCell>
                                    </TableRow>
                                ))}
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
