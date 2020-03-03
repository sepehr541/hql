import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import Reservation from "./Component/Reservation"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Rooms from "./Component/Rooms"
import "./Component/video.css"


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <div >
        <Nav />
        <Route exact path="/" component={Home}/>
        </div>
      
        <Switch>
        
          <Route path="/about">
            <About />
          </Route>

          <Route path="/resv" component={Reservation}/>
          <Route path="/Rooms" component={Rooms}/>
            

        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
