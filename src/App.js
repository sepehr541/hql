import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import Reservation from "./Component/Reservation"
import { BrowserRouter, Route, Switch } from "react-router-dom"


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
            

        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
