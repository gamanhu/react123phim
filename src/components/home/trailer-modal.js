import React from 'react'
import {Modal} from "@material-ui/core";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))
function TrailerModal(props) {
    const classes = useStyles();
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

        </Modal>
    )
}

const mapStateToProps = state => {
    return{
        trailerSrc : state.movieReducer.trailerSrc
    }
}
export default connect (mapStateToProps,null)(TrailerModal);

