import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, FormControl, Input, InputLabel, Divider, Button,  } from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
// import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
// import DateFnsUtils from '@date-io/date-fns';
import * as action from "../../redux/actions";
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({

    paperFade: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
        outline: 0,
        width: '40%',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        marginBottom: theme.spacing(2),
        // marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },
    button: {
        marginTop: theme.spacing(2)
    },
    btnXoa: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        // flexGrow:'1'
    }
}))

function ModalPhim(props) {
    let classes = useStyles();
    const [state, setState] = React.useState({
        maPhim: '',
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        maNhom: "",
        ngayKhoiChieu: new Date(),
        danhGia: '',
    })
    React.useEffect(() => {
        if (props.movieEdit) {
            setState(
                props.movieEdit
            )
        } else {
            setState({
                maPhim: '',
                tenPhim: "",
                biDanh: "",
                trailer: "",
                hinhAnh: "",
                moTa: "",
                maNhom: "",
                ngayKhoiChieu: new Date(),
                danhGia: '',
            })
        }

    }, [props])
    const FormatDate = (date) => {
        let today = new Date(date);
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!

        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        let out = dd + '-' + mm + '-' + yyyy;
        return out
    }
    const handleChange = (e) => {
        if (typeof e.getMonth === 'function') {
            setState({
                ...state,
                ngayKhoiChieu: new Date(e).toLocaleDateString()
            })
        } else {
            let name = e.target.name;
            let value = e.target.value;
            if (name === 'danhGia'||name === 'maPhim') {
                value = Number(value);
            }
            setState({
                ...state,
                [name]: value
            })

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(state);
        if (props.movieEdit) {
            state.ngayKhoiChieu = FormatDate(state.ngayKhoiChieu);
            props.onEditPhim(state);

        } else {
            state.ngayKhoiChieu = FormatDate(state.ngayKhoiChieu);
            props.onAddPhim(state);
        }
        props.close();
    }
    const handleXoa = (maPhim) => {
        props.onDeletePhim(maPhim);
        props.close();
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props.open}
            onClose={props.close}
            // BackdropComponent={Backdrop}
            className={classes.modal}
        // BackdropProps={{
        //     timeout: 500,
        // }}

        >
            {/* <ModalPhim/> */}
            <div className={classes.paperFade}>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <Typography component="h2" variant="h6" color="primary">
                        {(props.movieEdit.maPhim) ? "Cập nhật Phim" : "Thêm Phim Mới"}
                    </Typography>
                    {props.movieEdit ?
                        <FormControl disabled className={classes.form}>
                            <InputLabel htmlFor="component-simple">Mã Phim</InputLabel>
                            <Input name="maPhim" value={state.maPhim} onChange={handleChange} />
                        </FormControl> :
                        <FormControl className={classes.form} >
                            <InputLabel htmlFor="component-simple">Mã Phim</InputLabel>
                            <Input name="maPhim" value={state.maPhim} onChange={handleChange} />
                        </FormControl>}
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="component-simple">Bí Danh</InputLabel>
                        <Input name='biDanh' value={state.biDanh} onChange={handleChange} />
                    </FormControl >
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Tên Phim</InputLabel>
                        <Input name='tenPhim' value={state.tenPhim} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Trailer</InputLabel>
                        <Input name='trailer' value={state.trailer} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Hình Ảnh</InputLabel>
                        <Input name='hinhAnh' value={state.hinhAnh} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mô Tả</InputLabel>
                        <Input name='moTa' value={state.moTa} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mã Nhóm</InputLabel>
                        <Input name='maNhom' value={state.maNhom} onChange={handleChange} />
                    </FormControl>
                    <FormControl className={classes.form}>
                        {/* <InputLabel htmlFor="component-simple">Ngày Khởi Chiếu</InputLabel>
                        <Input name='ngayKhoiChieu' value={state.ngayKhoiChieu} onChange={handleChange} /> */}
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                variant="inline"
                                format="dd-MM-yyyy"
                                margin="normal"
                                id="ngayKhoiChieu"
                                label="Ngày Khỏi Chiếu"
                                value={new Date(state.ngayKhoiChieu)}
                                onChange={handleChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </FormControl>
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="component-simple">Đánh Giá</InputLabel>
                        <Input name='danhGia' value={state.danhGia} onChange={handleChange} />
                    </FormControl>
                    <Divider />
                    <Button type="submit" className={classes.button} variant="contained" color="primary">{props.movieEdit ? `Cập Nhật Thông Tin Phim` : `Thêm Phim`}</Button>
                    {props.movieEdit ? <Button type="button" onClick={() => handleXoa(state.maPhim)} className={classes.btnXoa} variant="contained" color="secondary">Xóa Phim</Button> : ``}

                </form>
            </div>
        </Modal>

    )
}
const mapDispatchToProps = dispatch => {
    return {
        onEditPhim: (data) => {
            dispatch(action.actOnEditPhimAPI(data))
        },
        onAddPhim: (data) => {
            dispatch(action.actOnAddPhimAPI(data))
        },
        onDeletePhim: maPhim => {
            dispatch(action.actOnDeletePhimAPI(maPhim))
        }
    }
}
export default connect(null, mapDispatchToProps)(ModalPhim);