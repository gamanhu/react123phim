import React, { Component } from 'react';
import Carousel1 from "../../img/carousel-1.jpg";
import Carousel2 from "../../img/carousel-2.jpg";
import Carousel3 from "../../img/carousel-3.jpg";
import Carousel4 from "../../img/carousel-4.jpg";
import Carousel5 from "../../img/carousel-5.jpg";

export default class Carousel extends Component {
    render() {
        return (
            <div className="carousel">

                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/* Indicators */}
                    <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to={0} className="active" />
                        <li data-target="#demo" data-slide-to={1} />
                        <li data-target="#demo" data-slide-to={2} />
                        <li data-target="#demo" data-slide-to={3} />
                        <li data-target="#demo" data-slide-to={4} />
                    </ul>
                    {/* The slideshow */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Carousel1} width="100%" alt="Los Angeles" />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel2} width="100%" alt="Chicago" />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel3} width="100%" alt="New York" />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel4} width="100%" alt="New York" />
                        </div>
                        <div className="carousel-item">
                            <img src={Carousel5} width="100%" alt="New York" />
                        </div>
                    </div>
                    {/* Left and right controls */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <img src="./img/back-session.png" width="50px" alt="" />
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <img src="./img/next-session.png" width="50px" alt="" />
                    </a>
                </div>

            </div>
        )
    }
}
