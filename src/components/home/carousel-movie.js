import React, { Component } from 'react'
import Movie from "./movie";
export default class CarouselMovie extends Component {
    
    renderHTML = ()=> {
        console.log(this.props.listMovie);
        return this.props.listMovie.map((movie,index)=>{
            return <Movie key={index} movie={movie}/>
        })
    }
    
    render() {
        return (
            <div className="carousel-item bg-white active">
                <div className="film-list">
                    {this.renderHTML()}
                    <div className="clear" />
                </div>
            </div>
        )
    }
}
