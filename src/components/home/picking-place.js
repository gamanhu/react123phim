import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/actions";
// import CinemaBranch from "./cinemaBranch";
import SuatChieu from "./suatchieu";
class PickingPlace extends Component {

    componentDidMount() {
        this.props.getListCinemaBrand();
        this.props.getListBranch("BHDStar");
        this.props.getListMovieBrand("BHDStar", "GP01");

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

        if (listBranchHaveMovie && listBranchHaveMovie.length > 0) {
            return this.props.listBranch.map((item, index) => {
                if (listBranchHaveMovie.includes(item.maCumRap)) {
                    let indexArr = listBranchHaveMovie.indexOf(item.maCumRap);
                    let {danhSachPhim} = listMovieBrand.lstCumRap[indexArr];
                    return <SuatChieu
                        key={index}
                        isData={true}
                        danhSachPhim = {danhSachPhim}
                        active={(index === 0 ? true : false)}
                        maCumRap={item.maCumRap}
                    />

                } else {
                    return <SuatChieu
                        key={index}
                        isData={false}
                        active={(index === 0 ? true : false)}
                        maCumRap={item.maCumRap}
                    />
                }

            })
        }
    }

    render() {
        return (
            <div className="picking-place" id="pickBrand">
                <ul className="nav nav-pills container justify-content-center" id="listBrands">
                    {this.renderCinemaBrand(this.props.listCinemaBrand)}
                </ul>
                <div className="movie-branch tab-content">
                    <div className="movie-branch__wrapper tab-pane container fade active show " id={`${this.props.brandName}`}>
                        <ul className=" nav nav-pills list-cinemas" id="listBranches">
                            {this.renderHTMLBranch(this.props.listBranch)}
                        </ul>
                        <div className="list-movies tab-content" id="listMovies">
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
