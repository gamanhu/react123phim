import React, { Component } from 'react'
import SuatChieu from "./suatchieu";
export default class CinemaBranch extends Component {
    renderHTMLBranch = (listBranch) => {
        return listBranch.map((branch, index) => {
            return (
                <li className="nav-item">
                    <a
                        key={index}
                        className={`cinema-item nav-link ${index === 0 ? "active" : ""}`}
                        href={`#${branch.maCumRap}`}
                        data-toggle="pill"
                        onClick={() => { this.renderListFilm(branch.maCumRap, this.props.listMovieBrand) }}
                    >
                        <img
                            src={`./img/${this.props.brandName}.jpg`}
                            width="50px"
                            alt="cgv-cresenmall"
                        />
                        <div className="cinema-item__detail">
                            <h5>{branch.tenCumRap}</h5>
                            <span>{branch.diaChi}</span>
                        </div>
                    </a>

                </li>
            )
        })
    }


    renderListFilm = (listBranch, listMovieBrand) => {

        // console.log(listMovieBrand);
        // return listBranch.map((item,index)=>{
        //     return <SuatChieu key={index} maCumRap={item.maCumRap} listMovieBrand={listMovieBrand}/>
        // })
        return listMovieBrand.map((item, index) => {
            console.log(item);
            return item.lstCumRap.map((item2, index2) => {
                console.log(item2);
                
                    return (
                        <SuatChieu key={index2} listBranch={listBranch} rapCoPhim={item2.maCumRap} listMovie={item2.danhSachPhim} />
                    )
                

            })
        })

        



    }


    render() {
        return (
            <div className="tab-pane container fade active show " id={`${this.props.brandName}`}>
                {/* <div className="advertisment" width="10%"></div> */}
                <ul className=" nav nav-pills list-cinemas">
                    {this.renderHTMLBranch(this.props.listBranch)}
                </ul>
                <div className="list-movies tab-content">
                    {this.renderListFilm(this.props.listBranch, this.props.listMovieBrand)}
                </div>
                <div className="clear" />
            </div>
            // {this.renderHTML(this.props.listBranch)}
            )
    }
}
