import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TabsContainer from './Component/TabsContainer'
import Login from './Component/Login/Login'
import "./Component/video.css"
import orderconfirmation from './Component/orderconf'


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/resv" component={TabsContainer} />
          <Route path="/login" component={Login} />
          <Route path='/orderconfirmation' component={orderconfirmation}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
