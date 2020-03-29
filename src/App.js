import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TabsContainer from './Component/TabsContainer'
import Login from './Component/Login/Login'
import Dashboard from './Component/Login/Dashboard'
import Table from './Component/Login/Table'
import Add from './Component/Login/Add'
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
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/add' component={Add} />
          <Route path='/dashboard/:data' component={Table} />
          <Route path='/orderconfirmation' component={orderconfirmation}/>
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
