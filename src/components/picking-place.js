import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../redux/actions";
import CinemaBranch from "./cinemaBranch";
class PickingPlace extends Component {
    componentDidMount() {
        
        this.props.getListCinemaBrand();
        this.props.getListBranch("BHDStar");
        this.props.getListMovieBrand("BHDStar","GP01");
        
    }
    
    renderBranch = (listBranch,brandName,listMovieBrand)=>{
        if(listBranch && listBranch.length>0 ){
            return <CinemaBranch 
            listBranch={listBranch} 
            brandName={brandName}
            listMovieBrand={listMovieBrand}
            />
        }
    }
    renderCinemaBrand = listCinemaBrand => {
        if (listCinemaBrand && listCinemaBrand.length > 0) {
            return listCinemaBrand.map((item, index) => {
                return (
                    <li key={index} className="nav-item">
                        <a 
                        className={`nav-link ${index === 0 ? "active" : ""}`} 
                        data-toggle="pill" 
                        href={`#${item.maHeThongRap}`}
                        onClick={()=>{
                            this.props.getListBranch(item.maHeThongRap);
                            this.props.getListMovieBrand(item.maHeThongRap,"GP01")}}
                        >
                            <img src={item.logo} width="50px" alt="" />
                        </a>
                    </li>
                )
            })
        }
    }

    render() {
        // console.log("render");
        // console.log(this.props.listCinemaBrand);
        return (
            <div className="picking-place">
                <ul className="nav nav-pills container justify-content-center">
                    {this.renderCinemaBrand(this.props.listCinemaBrand)}
                </ul>
                <div className="tab-content">
                    {this.renderBranch(this.props.listBranch,this.props.brandName,this.props.listMovieBrand)}
                    {/* <div className="tab-pane container fade" id="CGV">
                        ...
                    </div>
                    <div className="tab-pane container fade" id="CineStar">
                        ...
                    </div>
                    <div className="tab-pane container fade" id="Galaxy">
                        ...
                    </div>
                    <div className="tab-pane container fade" id="LotteCinima">
                        ...
                    </div>
                    <div className="tab-pane container fade" id="MegaGS">
                        ...
                    </div> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listCinemaBrand: state.cinemaBrandReducer.listCinemaBrand,
        listBranch: state.cinemaBrandReducer.listBranch,
        brandName:state.cinemaBrandReducer.brandName,
        listMovieBrand: state.cinemaBrandReducer.listMovieBrand,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListCinemaBrand: () => {
            dispatch(action.actGetListCinemaBrandAPI())
        },
        getListBranch : maHeThongRap => {
            dispatch(action.actGetListBranchAPI(maHeThongRap))
        },
        getListMovieBrand: (maHeThongRap,maNhom) => {
            dispatch(action.actGetListMovieBrandAPI(maHeThongRap,maNhom))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickingPlace);
