import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TabsContainer from './Component/TabsContainer'
import "./Component/video.css"


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/resv" component={TabsContainer} />
        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
