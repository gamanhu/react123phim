import React, { Component } from 'react';
import Carousel from "../../components/home/carousel";
import CatalougeFilm from "../../components/home/catalouge-film";
import PickingPlace from "../../components/home/picking-place";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <CatalougeFilm/>
                <PickingPlace/>
            </div>
        )
    }
    
}
