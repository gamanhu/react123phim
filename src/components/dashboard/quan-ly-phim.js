import React from 'react'
import { connect } from "react-redux";
import * as action from "../../redux/actions/index.js";
import { makeStyles } from "@material-ui/core/styles";
import FormData from 'form-data';
import {
    TableHead, TableCell, TableBody,
    TableRow, Table, Paper, Grid, Typography, Button, TextField, Modal
} from '@material-ui/core';
import ModalPhim from "./modal-phim";
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
        flexGrow: 1,
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
    colorRow: {
        backgroundColor: '#e9e9e9'
    }

}))



function QuanLyPhim(props) {
    const classes = useStyles();
    const [keyWord, setkeyWord] = React.useState('');
    const [inputOpen, setInputOpen] = React.useState(false);
    const [open, setOpen] = React.useState({
        onOpen: false,
        onEdit: {},
    });
    const [imageToUpload, setImageToUpload] = React.useState('');
    const [movieImageToUpload, setMovieImageToUpload] = React.useState([]);
    const handleOpen = (movie = false) => {
        setOpen({
            ...open,
            onOpen: true,
            onEdit: movie
        });
    };

    const handleClose = () => {
        setOpen({
            ...open,
            onOpen: false,
            onEdit: false,
        });
    };
    const handleInputOpen = (movie) => {
        setInputOpen(true);
        setMovieImageToUpload(movie);
    }
    const handleInputClose = () => {
        setInputOpen(false);
    }
    React.useEffect(() => {
        if (!props.listMovie.length > 0) {
            props.getListMovie();

        }
        console.log(props);

    }, [props]);
    const renderTable = (listMovie) => {
        let listMovie2 = listMovie.filter(item => {
            return item.tenPhim.toLowerCase().indexOf(keyWord.toLowerCase()) > -1;
        });
        return listMovie2.map((movie, index) => {
            return (
                <TableRow key={index} className={index % 2 !== 1 ? `` : classes.colorRow}>
                    <TableCell>{movie.maPhim}</TableCell>
                    <TableCell>{movie.tenPhim}</TableCell>
                    <TableCell>{new Date(movie.ngayKhoiChieu).toLocaleDateString()}</TableCell>
                    <TableCell>{movie.danhGia}</TableCell>
                    <TableCell align="right">
                        <Button variant="contained" color="primary" onClick={() => handleOpen(movie)}>
                            Sửa
                        </Button>
                        <Button variant="contained" color="default" onClick={() => handleInputOpen(movie)} > UpImg </Button>
                    </TableCell>
                </TableRow>
            )
        })
    }
    const handleOnChange = (e) => {
        let searchContent = e.target.value;
        setkeyWord(searchContent);

    }
    const handleSubmit = (e) => {
        e.preventDefault(); console.log(e);
    }
    // function uploadFile() {
    //     var blobFile = $('#filechooser').files[0];
    //     var formData = new FormData();
    //     formData.append("fileToUpload", blobFile);
    
    //     $.ajax({
    //        url: "upload.php",
    //        type: "POST",
    //        data: formData,
    //        processData: false,
    //        contentType: false,
    //        success: function(response) {
    //            // .. do something
    //        },
    //        error: function(jqXHR, textStatus, errorMessage) {
    //            console.log(errorMessage); // Optional
    //        }
    //     });
    // }
    const handleImgChange = e => {
        console.log(e);
        let preview = document.querySelector('#preview');
        let files = document.querySelector('input[type=file]').files;
        // console.log(files[0].name);
        const file = new Blob([files[0]],{type:'image/jpeg'});
        // console.log(file.filename);
        let formData = new FormData();
        formData.append('File',file,'jpeg');
        formData.append('tenPhim',movieImageToUpload.tenPhim);
        formData.append('maNhom',movieImageToUpload.maNhom);
        setImageToUpload(formData);

        function readAndPreview(file) {
            // Make sure `file.name` matches our extensions criteria
            if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
                var reader = new FileReader();

                reader.addEventListener("load", function () {
                    var image = new Image();
                    image.height = 100;
                    image.title = file.name;
                    image.src = this.result;
                    preview.appendChild(image);
                }, false);

                reader.readAsDataURL(file);
            }

        }
        if (files) {
            [].forEach.call(files, readAndPreview);
        }
    }
    const FormatDate = (date) => {
        let today = new Date(date);
        let dd = today.getDate();
        let mm = today.getMonth() + 1;

        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        let out = dd + '-' + mm + '-' + yyyy;
        return out
    };
    const handleUploadImage = (e) => {
        e.preventDefault();
        props.updateImg(movieImageToUpload.maPhim,imageToUpload);
        const tenfile = movieImageToUpload.tenPhim.replace(/\s+/g, '-').toLowerCase();
        movieImageToUpload.hinhAnh = `http://movie0706.cybersoft.edu.vn/hinhanh/${tenfile}_gp01.jpeg`;
        movieImageToUpload.ngayKhoiChieu = FormatDate(movieImageToUpload.ngayKhoiChieu);
        props.onEditPhim(movieImageToUpload);
    }
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight, classes.scrollBar);
    return (
        <div>
            <Button variant="contained" className={classes.addPhimBtn} onClick={() => handleOpen()}>
                + Thêm Phim Mới
            </Button>
            <ModalPhim open={open.onOpen} close={handleClose} movieEdit={open.onEdit} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={inputOpen}
                onClose={handleInputClose}
                className={classes.modal}
            >
                <div className={classes.paperFade}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <input type='file' onChange={handleImgChange} />
                        <div id="preview"></div>
                        <Button type="submit" onClick={handleUploadImage}>Nop</Button>
                    </form>
                </div>
            </Modal>
            <Grid container spacing={3}>
                <Grid item xs={12} >
                    <Paper className={fixedHeightPaper}>
                        <div className={classes.title}>
                            <Typography component="h2" variant="h6" color="primary" className={classes.boxTitle} >
                                Danh Sách Phim
                        </Typography>
                            <TextField onChange={handleOnChange} className={classes.searchBar} id="outlined-basic" label="Tìm kiếm phim (theo tên)" />

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
        },
        updateImg: (maPhim,data)=>{
            dispatch(action.actUpdateImgAPI(maPhim,data));
        },
        onEditPhim: (data) => {
            dispatch(action.actOnEditPhimAPI(data))
        },
    }
}
const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.listMovie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyPhim);


