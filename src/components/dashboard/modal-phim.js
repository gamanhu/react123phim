import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Modal, Typography, FormControl, Input, InputLabel, Divider, Button } from '@material-ui/core';

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
        marginRight:theme.spacing(2)
    },
    button:{
        marginTop: theme.spacing(2)
    },
    btnXoa:{
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2),
        // flexGrow:'1'
    }
}))

export default function ModalPhim(props) {
    let classes = useStyles();
    const [state, setState] = React.useState({
        maPhim: '',
        tenPhim: "",
        biDanh: "",
        trailer: "",
        hinhAnh: "",
        moTa: "",
        maNhom: "",
        ngayKhoiChieu: "",
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
                ngayKhoiChieu: "",
                danhGia: '',
            })
        }

    }, [props])
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'maPhim' || name === 'danhGia') {
            value = Number(value);
        }
        setState({
            ...state,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    console.log(state);
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
                    {props.movieEdit? 
                    <FormControl disabled className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mã Phim</InputLabel>
                        <Input  name="maPhim" value={state.maPhim} onChange={handleChange} />
                    </FormControl> : 
                    <FormControl className={classes.form} >
                        <InputLabel htmlFor="component-simple">Mã Phim</InputLabel>
                        <Input  name="maPhim" value={state.maPhim} onChange={handleChange} />
                    </FormControl>}
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="component-simple">Bí Danh</InputLabel>
                        <Input  name='biDanh' value={state.biDanh} onChange={handleChange} />
                    </FormControl >
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Tên Phim</InputLabel>
                        <Input  name='tenPhim' value={state.tenPhim} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Trailer</InputLabel>
                        <Input  name='trailer' value={state.trailer} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Hình Ảnh</InputLabel>
                        <Input  name='hinhAnh' value={state.hinhAnh} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mô Tả</InputLabel>
                        <Input  name='moTa' value={state.moTa} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mã Nhóm</InputLabel>
                        <Input  name='maNhom' value={state.maNhom} onChange={handleChange} />
                    </FormControl>
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="component-simple">Ngày Khởi Chiếu</InputLabel>
                        <Input  name='ngayKhoiChieu' value={state.ngayKhoiChieu} onChange={handleChange} />
                    </FormControl>
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="component-simple">Đánh Giá</InputLabel>
                        <Input  name='danhGia' value={state.danhGia} onChange={handleChange} />
                    </FormControl>
                    <Divider/>
                    <Button type="submit" className={classes.button} variant="contained" color="primary">{props.movieEdit?`Cập Nhật Thông Tin Phim`:`Thêm Phim`}</Button>
                    {props.movieEdit?<Button type="submit" className={classes.btnXoa} variant="contained" color="secondary">Xóa Phim</Button>:``}
                    
                </form>
            </div>
        </Modal>

    )
}
