import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/actions";
// import CinemaBranch from "./cinemaBranch";
import SuatChieu from "./suatchieu";
class PickingPlace extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         brandLogo: ''
    //     }
    // }
    componentDidMount() {
        // Get API LaythongtinHeThongRap (BHD,CGV,CineStar,...)
        this.props.getListCinemaBrand();
        // Get API LaythongtinCUmRaptheoHeThong (BHD 3/2,BHD Tower,...)
        this.props.getListBranch("BHDStar");
        // Get API Laythongtinlichchieutheohethongrap
        this.props.getListMovieBrand("BHDStar", "GP01");

    }

    // renderBranch = (listBranch, brandName, listMovieBrand) => {
    //     if (listBranch && listBranch.length > 0) {
    //         return <CinemaBranch
    //             listBranch={listBranch}
    //             brandName={brandName}
    //             listMovieBrand={listMovieBrand}
    //         />
    //     }
    // }
    renderCinemaBrand = listCinemaBrand => {
        // Render the List of Cinema Brand: CGV, BHD, CineStar, Galaxy, etc...
        // Nav of bootstrap
        // Content of Nav is
        
        if (listCinemaBrand && listCinemaBrand.length > 0) {
            return listCinemaBrand.map((item, index) => {
                return (
                    <li key={index} className="nav-item">
                        <a
                            className={`nav-link ${index === 0 ? "active" : ""}`}
                            data-toggle="pill"
                            href={`#${item.maHeThongRap}`}
                            onClick={() => {
                                this.props.getListBranch(item.maHeThongRap);
                                this.props.getListMovieBrand(item.maHeThongRap, "GP01")
                                this.setState({
                                    brandLogo : item.logo
                                })
                            }}
                        >
                            <img src={item.logo} width="50px" alt="" />
                        </a>
                    </li>
                )
            })
        }
    }

    renderHTMLBranch = (listBranch) => {
        return listBranch.map((branch, index) => {
            return (
                <li key={index} className="nav-item branch-item">
                    <a

                        className={`cinema-item nav-link ${index === 0 ? "active" : ""}`}
                        href={`#${branch.maCumRap}`}
                        data-toggle="pill"
                        onClick={() => { this.renderListFilm(this.props.listMovieBrand) }}
                    >
                        <img
                            src={`./img/${this.props.brandName}.jpg`}
                            width="50px"
                            alt="cgv-cresenmall"
                        />
                        <div className="cinema-item__detail">
                            <h5>{branch.tenCumRap}</h5>
                            <p>{branch.diaChi}</p>
                        </div>
                    </a>

                </li>
            )
        })
    }
    renderListFilm = (listMovieBrand, listBranchHaveMovie) => {

        // console.log(listBranchHaveMovie);
        // console.log(listMovieBrand);

        if (listBranchHaveMovie && listBranchHaveMovie.length > 0) {
            return this.props.listBranch.map((item, index) => {
                if (listBranchHaveMovie.includes(item.maCumRap)) {
                    let indexArr = listBranchHaveMovie.indexOf(item.maCumRap);
                    let {danhSachPhim} = listMovieBrand.lstCumRap[indexArr];
                    return <SuatChieu
                        key={index}
                        isData={true}
                        // listBranchHaveMovie={listBranchHaveMovie}
                        danhSachPhim = {danhSachPhim}
                        active={(index === 0 ? true : false)}
                        maCumRap={item.maCumRap}
                        // logo = {this.state.brandLogo}
                        // listMovieBrand={listMovieBrand}
                    />

                } else {
                    return <SuatChieu
                        key={index}
                        isData={false}
                        // listBranchHaveMovie={listBranchHaveMovie}
                        
                        active={(index === 0 ? true : false)}
                        maCumRap={item.maCumRap}
                        // listMovieBrand={listMovieBrand}
                    />
                }

            })
        }
        // return listMovieBrand.map((item, index) => {
        //     console.log(item);
        //     return item.lstCumRap.map((item2, index2) => {
        //         console.log(item2);
        //         return (
        //             <SuatChieu key={index2} listBranch={listBranch} rapCoPhim={item2.maCumRap} listMovie={item2.danhSachPhim} />
        //         )


        //     })
        // })
    }

    render() {
        return (
            <div className="picking-place">
                <ul className="nav nav-pills container justify-content-center">
                    {this.renderCinemaBrand(this.props.listCinemaBrand)}
                </ul>
                <div className="tab-content">
                    <div className="tab-pane container fade active show " id={`${this.props.brandName}`}>
                        {/* <div className="advertisment" width="10%"></div> */}
                        <ul className=" nav nav-pills list-cinemas">
                            {this.renderHTMLBranch(this.props.listBranch)}
                        </ul>
                        <div className="list-movies tab-content">
                            {this.renderListFilm(this.props.listMovieBrand[0], this.props.listBranchHaveMovie[0])}
                        </div>
                        <div className="clear" />
                    </div>


                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listCinemaBrand: state.cinemaBrandReducer.listCinemaBrand,
        listBranch: state.cinemaBrandReducer.listBranch,
        brandName: state.cinemaBrandReducer.brandName,
        listMovieBrand: state.cinemaBrandReducer.listMovieBrand,
        listBranchHaveMovie: state.cinemaBrandReducer.listBranchHaveMovie
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getListCinemaBrand: () => {
            dispatch(action.actGetListCinemaBrandAPI())
        },
        getListBranch: maHeThongRap => {
            dispatch(action.actGetListBranchAPI(maHeThongRap))
        },
        getListMovieBrand: (maHeThongRap, maNhom) => {
            dispatch(action.actGetListMovieBrandAPI(maHeThongRap, maNhom))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PickingPlace);
