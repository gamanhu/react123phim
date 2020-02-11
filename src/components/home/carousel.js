import React, { Component } from 'react';

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
                            <img src="./img/carousel-1.jpg" width="100%" alt="Los Angeles" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/carousel-2.jpg" width="100%" alt="Chicago" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/carousel-3.jpg" width="100%" alt="New York" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/carousel-4.jpg" width="100%" alt="New York" />
                        </div>
                        <div className="carousel-item">
                            <img src="./img/carousel-5.jpg" width="100%" alt="New York" />
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
