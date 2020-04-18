import React, { Component } from 'react';
import Carousel from "../../components/home/carousel";
import CatalougeFilm from "../../components/home/catalouge-film";
import PickingPlace from "../../components/home/picking-place";
import Footer from "../../components/home/footer";
// import PickingFast from "../../components/home/picking-fast";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                {/* <PickingFast/> */}
                <CatalougeFilm/>
                <PickingPlace/>
                <Footer/>
            </div>
        )
    }
    
}
