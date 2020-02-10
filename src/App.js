import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from "./components/navbar";
import PageNotFound from "./pages/page-not-found";
import {routesHome} from "./routes";
import HomeTemplate from './templates/HomeTemplate';


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

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Navbar/> */}
      <Switch>
        {showPage(routesHome)}
        <Route path=""  component= {PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
