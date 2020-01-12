import React, { Component } from 'react'
import SuatChieu from "./suatchieu";
export default class CinemaBranch extends Component {

    renderHTML = (listBranch) => {
        return listBranch.map((branch, index) => {
            return (
                <div 
                key={index} 
                className={`cinema-item ${index === 0 ? "active" : ""}`} 
                href={`#${branch.maCumRap}`}
                onClick={()=>{this.renderListFilm(branch.maCumRap,this.props.listMovieBrand)}}
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
                </div>


            )
        })
    }


    renderListFilm = (maRap, listMovieBrand) => {
        // let { lstCumRap } = {listMovieBrand};
        console.log(listMovieBrand);
        return listMovieBrand.map((item,index)=>{
            console.log(item);
            return item.lstCumRap.map((item2,index2)=>{
                console.log(item2);
                if(item2.maCumRap=maRap){ 
                    return(
                        <SuatChieu key={index2} rap={maRap} listMovie={item2.danhSachPhim}/>
                    )
                }

            })
        })
            
            // let indexCumRap = listMovieBrand.lstCumRap.map((cumRap,index)=>{
            //     if(cumRap.maCumRap===maRap){
            //         return index
            //     }else{
            //         return -1
            //     }
            // })
            // let {lstCumRap} = {listMovieBrand};
        // console.log(listMovieBrand.lstCumRap[0]);
        
        // console.log(listMovieBrand.lstCumRap[0]);
        // let abc = listMovieBrand.lstCumRap.findIndex((item)=>{ listBranch.maCumRap.in
        //     // console.log(item.maCumRap);
        // })
        // return (
        //     <SuatChieu/>
        // )


        
    }


    render() {
        return (
            <div className="tab-pane container fade active show " id={`${this.props.brandName}`}>
                {/* <div className="advertisment" width="10%"></div> */}
                <ul className="list-cinemas">
                    {this.renderHTML(this.props.listBranch)}
                </ul>
                <div className="list-movies tab-content">
                    {this.renderListFilm(this.props.listBranch[0].maCumRap, this.props.listMovieBrand)}
                </div>
                <div className="clear" />
            </div>
        )
    }
}
