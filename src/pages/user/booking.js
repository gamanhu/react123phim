import React from 'react';
import RightBooking from "../../components/booking/right-booking";
import LeftBooking from "../../components/booking/left-booking";
import {connect} from "react-redux";
import * as action from "../../redux/actions";

function Booking(props) {
    console.log(props.history.location.pathname.split("/")[2]);
    React.useEffect(()=>{
        let pathName = Number(props.history.location.pathname.split("/")[2]);
        console.log(props);
        props.actGetBoothInfo(pathName);
    },[props])
    return (
        <div>
            <LeftBooking />
            <RightBooking  />
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        actGetBoothInfo: (maLichChieu) => {
            dispatch(action.actGetBoothInfoAPI(maLichChieu))
        }
    }
}

export default connect(null,mapDispatchToProps)(Booking);