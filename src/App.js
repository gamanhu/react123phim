import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
// import Navbar from "./components/navbar";
import PageNotFound from "./pages/page-not-found";
import {routesHome,routesUser} from "./routes";
import HomeTemplate from './templates/HomeTemplate';
import UserTemplate from './templates/UserTemplate';
import UserLogin from "./pages/user/login";
const showPage = routes => {
  if(routes && routes.length>0){
    return routes.map((item,index)=>{
      return (
        <HomeTemplate 
        key={index} 
        path = {item.path} 
        exact = {item.exact} 
        Component = {item.component}
        />

      )
    })
  }
}

const showUserPage = routes =>{
  if(routes && routes.length>0){
    return routes.map((item,index)=>{
      return(
        <UserTemplate
        key={index}
        path={item.path}
        exact={item.exact}
        Component={item.component}
        />
      )
    })
  }
}
// const showLoginPage = () =>{
//   if(!localStorage.getItem("UserLogin")){
//     return <Route path="/login" component={UserLogin}/>
//   } else{
//     return(
//       <Redirect to="/"/>
//     ) 
//   }
// }
function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Navbar/> */}
      <Switch>
        {showPage(routesHome)}
        {showUserPage(routesUser)}
        {/* {showLoginPage()} */}
        <Route 
        path="/login" 
        render={(propsComponent)=>{
          if(!localStorage.getItem("UserLogin")){
            return <UserLogin {...propsComponent}/>
          } else {
            return <Redirect to="/"/>
          }
        }}
        />
        <Route path=""  component= {PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
