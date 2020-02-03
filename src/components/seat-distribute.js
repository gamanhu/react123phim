import React,{useState} from 'react'
import SeatIcon from "./seat-icon";
export default function SeatDistribute(props) {
    const [state,setState] = useState({
        isChoose:false,
        isBook:props.seatInfo.daDat,
    })
    const handleChoose = (isChoose) => {
        setState({
            ...state,
            isChoose:!isChoose
        })
    }
    return (
        <div className="seat__place" onClick={()=>handleChoose(state.isChoose)}>
            <SeatIcon type={props.seatInfo.loaiGhe} state={state} />
            <span className={`seat__number ${state.isChoose?"active":""}`}>{props.seatNum+1}</span>
        </div>
    )
}
