import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
import {
    Paper, Button, Modal, Typography,FormControl, Input, InputLabel,
} from '@material-ui/core';
import {
    MuiPickersUtilsProvider,
    // KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import * as action from "../../redux/actions";
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({

    addLichChieuBtn: {
        backgroundColor: "#0fb726",
        outline: 0,
        marginBottom: theme.spacing(2),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paperFade: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    form: {
        marginBottom: theme.spacing(2),
        // marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
    },

}))

function QuanLyLichChieu(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        maPhim: '',
        ngayChieuGioChieu:new Date(),
        maRap: '',
        giaVe: '',

    })
    const [inputOpen, setOpenModal] = React.useState(false);
    const handleOpen = () => {
        setOpenModal(true);
    };
    const handleModalClose = () => {
        setOpenModal(false);
    };
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
        let out = dd + '/' + mm + '/' + yyyy;
        return out
    }
    const handleChange = (e) => {
        if (typeof e.getMonth === 'function') {
            console.log(new Date(e).toLocaleDateString());
            setState({
                ...state,
                ngayChieuGioChieu: new Date(e).toLocaleDateString()
            })
        } else {
            let name = e.target.name;
            let value = e.target.value;
            if (name === 'maRap'||name === 'maPhim' || name ==='giaVe') {
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
        state.ngayChieuGioChieu = FormatDate(state.ngayChieuGioChieu);
        console.log(state);
        props.taoLichChieu(state);
    }
    return (
        <div>
            <Button variant="contained" className={classes.addLichChieuBtn} onClick={() => handleOpen()}>
                + Tạo Lịch Chiếu Phim
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={inputOpen}
                onClose={handleModalClose}
                className={classes.modal}
            >
                <div className={classes.paperFade}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Typography component="h2" variant="h6" color="primary">
                            Tạo Lịch Chiếu Phim Mới
                        </Typography>
                        <FormControl className={classes.form}>
                            <InputLabel htmlFor="component-simple">Mã Phim</InputLabel>
                            <Input name='maPhim' value={state.maPhim} onChange={handleChange} />
                        </FormControl >
                        <FormControl className={classes.form}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="ngayChieuGioChieu"
                                    label="Ngày Chiếu"
                                    value={new Date(state.ngayChieuGioChieu)}
                                    onChange={handleChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </FormControl>
                        <FormControl className={classes.form}>
                            <InputLabel htmlFor="component-simple">Mã Rạp</InputLabel>
                            <Input name='maRap' value={state.maRap} onChange={handleChange} />
                        </FormControl >
                        <FormControl className={classes.form}>
                            <InputLabel htmlFor="component-simple">Giá Vé</InputLabel>
                            <Input name='giaVe' value={state.giaVe} onChange={handleChange} />
                        </FormControl >
                        <Button type="submit">Tạo</Button>

                    </form>
                </div>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        taoLichChieu: (data) => {
            dispatch(action.actTaoLichChieuAPI(data));
        }
    }
}
export default connect (null,mapDispatchToProps) (QuanLyLichChieu);
