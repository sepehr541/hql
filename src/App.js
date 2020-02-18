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
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/resv">
            <Reservation />
          </Route>

        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
