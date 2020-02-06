import React,{useState,useEffect} from 'react'
import SeatIcon from "./seat-icon";
import {connect} from "react-redux";
// import * as action from "../redux/actions";
import * as ActionType from "../redux/constants/action-types";
function SeatDistribute(props) {
    const [state,setState] = useState({
        isChoose:false,
        isBook:props.seatInfo.daDat,
    })
    const handleChoose = (isChoose) => {
        // props.seatUserChoose((!state.isChoose),props.seatRowName,props.seatNum+1,props.seatInfo);
        setState({
            ...state,
            isChoose:!isChoose
        })
        
        
    }
    useEffect(()=>{
        props.seatUserChoose(state.isChoose,props.seatRowName,props.seatNum+1,props.seatInfo);
    }
    )
    // console.log(props);
    
    return (
        <div className="seat__place" onClick={()=>handleChoose(state.isChoose)}>
            <SeatIcon type={props.seatInfo.loaiGhe} state={state} />
            {state.isBook?"":<span className={`seat__number ${state.isChoose?"active":""}`}>{props.seatNum+1}</span>}
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return{
        seatUserChoose: (isChoose,seatRow,seatNum,seatInfo) => {
            dispatch({
                type: ActionType.ADD_SEAT_USER_CHOOSE,
                isChoose,
                seatInfo,
                seatName:seatRow+seatNum
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(SeatDistribute);
