import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import Reservation from "./Component/Reservation"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Rooms from "./Component/Rooms"

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Route exact path="/" component={Home}/>
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
