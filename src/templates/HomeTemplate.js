import React from 'react'
import Navbar from "../components/navbar";
import { Route } from "react-router-dom";
const HomeLayout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}

        </div>
    )
}
export default function HomeTemplate({ Component, ...props }) {
    return (

        <Route
            {...props}
            render={(propsComponent) => {
                return (
                    <HomeLayout>
                        <Component {...propsComponent} />
                    </HomeLayout>
                );
            }}
        />


    )
}
