import React, { Component } from 'react';
import Carousel from "../../components/carousel";
import CatalougeFilm from "../../components/catalouge-film";
import PickingPlace from "../../components/picking-place";
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
