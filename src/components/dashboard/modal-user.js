import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, FormControl, Input, InputLabel, Divider, Button } from '@material-ui/core';
import {connect} from "react-redux";
import * as action from "../../redux/actions";
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

function ModalUser(props) {
    let classes = useStyles();
    const [state, setState] = React.useState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "",
        maLoaiNguoiDung: "",
        hoTen: ""
    })
    React.useEffect(() => {
        if (props.userEdit) {
            setState(
                props.userEdit
            )
        } else {
            setState({
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "",
                maLoaiNguoiDung: "",
                hoTen: ""
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
        if(props.userEdit){
            props.onEditUser(state);

        }else {
            props.onAddUser(state);
        }
        props.close();
    }
    const handleXoa = (taiKhoan) => {
        props.onDeleteUser(taiKhoan);
        props.close();
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
                        {(props.userEdit) ? "Cập nhật Người Dùng" : "Thêm Người Dùng"}
                    </Typography>
                    {props.userEdit ?
                        <FormControl disabled className={classes.form}>
                            <InputLabel htmlFor="component-simple">Tài Khoản</InputLabel>
                            <Input name="taiKhoan" value={state.taiKhoan} onChange={handleChange} />
                        </FormControl> :
                        <FormControl className={classes.form} >
                            <InputLabel htmlFor="component-simple">Tài Khoản</InputLabel>
                            <Input name="taiKhoan" value={state.taiKhoan} onChange={handleChange} />
                        </FormControl>}
                    <FormControl className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mật Khẩu</InputLabel>
                        <Input name='matKhau' value={state.matKhau} onChange={handleChange} />
                    </FormControl >
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Email</InputLabel>
                        <Input name='email' value={state.email} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Số Điện Thoại</InputLabel>
                        <Input name='soDt' value={state.soDt} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Mã Nhóm</InputLabel>
                        <Input name='maNhom' value={state.maNhom} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Loại Người Dùng</InputLabel>
                        <Input name='maLoaiNguoiDung' value={state.maLoaiNguoiDung} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth className={classes.form}>
                        <InputLabel htmlFor="component-simple">Họ Tên</InputLabel>
                        <Input name='hoTen' value={state.hoTen} onChange={handleChange} />
                    </FormControl>
                    <Divider />
                    <Button type="submit" title="Cap nhat" className={classes.button} variant="contained" color="primary">{props.userEdit ? `Cập Nhật Thông Người Dùng` : `Thêm Người Dùng`}</Button>
                    {props.userEdit ? <Button type="button" onClick={() => handleXoa(state.taiKhoan)} className={classes.btnXoa} variant="contained" color="secondary">Xóa Người Dùng</Button> : ``}

                </form>
            </div>
        </Modal>

    )
}
const mapDispatchToProps = dispatch => {
    return {
        onEditUser: (data) => {
            dispatch(action.actOnEditUserAPI(data))
        },
        onAddUser: (data) => {
            dispatch(action.actOnAddUserAPI(data))
        },
        onDeleteUser: taiKhoan => {
            dispatch(action.actOnDeleteUserAPI(taiKhoan))
        }
    }
}
export default connect(null, mapDispatchToProps)(ModalUser);