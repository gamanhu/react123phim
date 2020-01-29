import React from 'react'
import {Route,Redirect} from "react-router-dom";

const UserLayout = (props)=>{
    return(
        <div>
            {props.children}
        </div>
    )
}

export default function UserTemplate({Component, ...props}) {
    return (
        <Route
            {...props}
            render={(propsComponent)=> {
                if(localStorage.getItem("UserLogin")){
                    return(
                        <UserLayout>
                            <Component {...propsComponent}/>
                        </UserLayout>
                    );

                }else{
                    return(
                        <Redirect to="/login"/>
                    )
                }
            }}

        />
        
    )
}
