import React from 'react';
import { NavLink } from 'react-router-dom';
import appleIcon from "../../img/apple-logo.png";
import androidIcon from "../../img/android-logo.png";
import facebookIcon from "../../img/facebook-logo.png";
import zaloIcon from "../../img/zalo-logo.png";
import zionIcon from "../../img/zion-logo.jpg";
import BCTIcon from "../../img/bocongthuong.png";
export default function Footer() {

    const listConnect = [
        {
            path: "../../img/cgv.png",
            title:"CGV"
        },
        {
            path: "../../img/galaxycine.png",
            title:"Galaxy"
        },
        {
            path: "../../img/bhd.png",
            title:"BHD"
        },
        {
            path: "../../img/cinestar.png",
            title:"CineStar"
        },
        {
            path: "../../img/lotte.png",
            title:"Lotte"

        },
        {
            path: "../../img/megags.png",
            title:"MegaGs"
        },
        {
            path: "../../img/beta.jpg",
            title:"Beta"
        },
        {
            path: "../../img/dongdacinema.png",
            title:"Đống Đa"
        },
        {
            path: "../../img/TOUCH.png",
            title:"Touch"
        },
        {
            path: "../../img/cnx.jpg",
            title:"Cinemax"
        },
        {
            path: "../../img/STARLIGHT.png",
            title:"Starlight"
        },
        {
            path: "../../img/dcine.png",
            title:"dcine"
        },
        {
            path: "../../img/zalopay_icon.png",
            title:"Zalo Pay"
        },
        {
            path: "../../img/payoo.jpg",
            title:"Payoo"
        },
        {
            path: "../../img/VCB.png",
            title:"Vietcombank"
        },
        {
            path: "../../img/AGRIBANK.png",
            title:"Agribank"
        },
        {
            path: "../../img/VIETTINBANK.png",
            title:"Vietinbank"
        },
        {
            path: "../../img/IVB.png",
            title:"IviBank"
        },
        {
            path: "../../img/123go.png",
            title:"123go"
        },
        {
            path: "../../img/laban.png",
            title:"La Bàn"
        },
    ];

    const chunkify = (a, n, balanced) => {
        if (n < 2)
            return [a];

        let len = a.length,
            out = [],
            i = 0,
            size;

        if (len % n === 0) {
            size = Math.floor(len / n);
            while (i < len) {
                out.push(a.slice(i, i += size));
            }
        }

        else if (balanced) {
            while (i < len) {
                size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i += size));
            }
        }

        else {

            n--;
            size = Math.floor(len / n);
            if (len % size === 0)
                size--;
            while (i < size * n) {
                out.push(a.slice(i, i += size));
            }
            out.push(a.slice(size * n));

        }

        return out;
    }
    const renderConnect = () => {
        let listArray = chunkify(listConnect, 4, 5);
        return listArray.map((item, index) => {
            return (
                <div key={index} className="row col-sm-12 noPaddingLeft linePartner">
                    {renderList(item)}
                </div>
            )
        })
    }
    const renderList = (array) => {
        return array.map((item, index) => {
            return (
                <a href="#a" key={index}>
                    <img className="iconConnect" title={item.title} src={item.path} alt={item.title} />
                </a>
            )
        })
    }
    return (
        <div className="footer" >
            <div className="col-xs-12 block" id="footer">

                <div className="mainMaxWidth">
                    <div className="row">
                        <div className="col-sm-4 col-xs-12">
                            <p className="title hideOnMovile ">TIX</p>
                            <div className="col-sm-6 col-xs-6 rules noPaddingLeft fontSizeP hideOnMobile">
                                <a href="#a">FAQ</a>
                                <a href="#a">Brand Guidelines</a>
                                <NavLink to="/dashboard">Dashboard</NavLink>
                            </div>
                            <div className="col-sm-6 col-xs-12 rules noPaddingLeft fontSizeP">
                                <a href="#a">Thỏa thuận sử dụng</a>
                                <a href="#a">Quy chế hoạt động</a>
                                <a href="#a">Chính sách bảo mật</a>
                                <a href="#a">Quyền lợi thành viên</a>
                            </div>
                        </div>
                        <div className="col-sm-4 col-xs-12 hideOnMobile">
                            <p className="title">ĐỐI TÁC</p>
                            {renderConnect()}
                            {/* <div className="row col-sm-12 noPaddingLeft linePartner">
                                <a href="#"><img className="iconConnect" src={cgvIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={galaxyIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={bhdIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={cinestarIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={lotteIcon} alt="" /></a>
                            </div>
                            <div className="row col-sm-12 noPaddingLeft linePartner">
                                <a href="#"><img className="iconConnect" src={cgvIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={galaxyIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={bhdIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={cinestarIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={lotteIcon} alt="" /></a>
                            </div>
                            <div className="row col-sm-12 noPaddingLeft linePartner">
                                <a href="#"><img className="iconConnect" src={cgvIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={galaxyIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={bhdIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={cinestarIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={lotteIcon} alt="" /></a>
                            </div>
                            <div className="row col-sm-12 noPaddingLeft linePartner">
                                <a href="#"><img className="iconConnect" src={cgvIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={galaxyIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={bhdIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={cinestarIcon} alt="" /></a>
                                <a href="#"><img className="iconConnect" src={lotteIcon} alt="" /></a>
                            </div> */}
                        </div>
                        <div className=" col-sm-2 hideOnMobile col-xs-12">
                            <p className="title">MOBILE APP</p>
                            <a href="#a"><img className="iconApp" title="AppStore" src={appleIcon} alt=""/></a>
                            <a href="#a"><img className="iconApp" title="GooglePlay Store" src={androidIcon} alt=""/></a>
                        </div>
                        <div className="col-sm-2 col-xs-12 textCenter">
                            <p className="title">SOCIAL</p>
                            <a href="#a"><img className="iconApp" title="Facebook" src={facebookIcon} alt=""/></a>
                            <a href="#a"><img className="iconApp" title="Zalo" src={zaloIcon} alt=""/></a>
                        </div>
                    </div>
                    <hr className="hrFooter"/>
                    <div className="row">
                        <div className="col-sm-1 col-xs-12 imgFooter " style={{borderRadius: '8px'}}>
                            <img className="vngIcon" src={zionIcon} alt=""/>
                        </div>
                        <div className="col-sm-9 col-xs-12 infoFooter ">
                            <span>TIX REPLICATE - SẢN PHẨM CỦA NGUYỄN HOÀNG KHÔI NGUYÊN - HỌC VIÊN CYBERSOFT ACADEMY</span>
                            <span>Thông tin: Học viên khóa 33 FrontEnd Development</span>
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783
                                <br/>
                                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                            </span>
                        </div>
                        <div className="col-sm-2 col-xs-12 imgFooter">
                            <img className="Boco" src={BCTIcon} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
