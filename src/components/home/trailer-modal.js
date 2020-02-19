import React from 'react'
import { Modal } from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
// import { closeImg} from "../../img/close.png";
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    modal: {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        position:'fixed',
        height: '85%',
    },
    modalDialog:{
        position: 'absolute',
        left: '50%',
        top: '60%',
        transform: 'translate(-50%,-50%)',
        margin: '0',
        outline: 'none',
        
    },
    modalLg:{
        width: '900px',
        // height: '532px'
    },
    modalContent:{
        position:'relative',
        boxShadow: '0 0px 15px rgba(0,0,0,.2)',
        // backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,.2)',
        height:'500px',
        // height:'auto',
        // borderRadius: '6px',
        
        // backgroundClip: 'padding-box'
    },
    btnClose:{
        position: 'absolute',
        top: '-12.5px',
        right: '-12.5px',
        opacity: '1',
        zIndex: '2',
        width: '25px',
        height: '25px',
        backgroundColor: 'black',
        color: "#fff",
        borderRadius: '50%',
        outline:'none',
        border:'none'

    },
    trailerbox:{
        width: '100%',
        height: '100%',
    }
}))
function TrailerModal(props) {
    const classes = useStyles();
    let modalBox = clsx(classes.modalDialog, classes.modalLg );
    // if(window.screen.width >= '992px'){
        
         
    // } else {
    //      modalBox = clsx(classes.modalDialog)
    // }
    return (
        <Modal
            // aria-labelledby="transition-modal-title"
            // aria-describedby="transition-modal-description"
            open={props.open}
            onClose={props.close}
            // BackdropComponent={Backdrop}
            className={classes.modal}
        // BackdropProps={{
        //     timeout: 500,
        // }}

        >
            <div className={modalBox}>
                <div className={classes.modalContent}>

                    <button className={classes.btnClose} onClick={()=>{props.close()}}>
                        X
                    </button>
                    <iframe className={classes.trailerbox}  allowFullScreen title="trailer"
                        src={props.trailerSrc}>
                    </iframe>
                </div>
            </div>
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        trailerSrc: state.movieReducer.trailerSrc
    }
}
export default connect(mapStateToProps, null)(TrailerModal);

