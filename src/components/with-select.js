import React,{useState,useEffect} from 'react';

export default function WithSelect(props) {
    const [state,setState] = useState({
        select:"",
        onOpen:false
    })    
    const renderSelectList = (listSelect) => {
        if(listSelect && listSelect.length>0){
            return listSelect.map((item,index)=>{
                // console.log(item[props.propsKey]);
                return <li 
                key={index}
                onClick={() => {handleOnClick(item[props.propsKey])}}
                >{item[props.propsKey]}</li>
            })
        }
    }
    const handleOnClick = (item)=>{
        setState({
            select:item,
        })
    };
    const selectOption = (onOpen)=>{
        setState({
            ...state,
            onOpen:!onOpen
        })
    }
    return (
        <div className={props.classnames}>
            <div 
            className="selectMenu"
            onClick={()=>{selectOption(state.onOpen)}}
            >
                {(state.select) ? `${state.select}` : `${props.chooseName}`}
            </div>
            <ul
                className={`selectScroll ${state.onOpen?"active":""}`}
            >
                {renderSelectList(props.listSelect)}
            </ul>

        </div>
    )

}
