import React, { Fragment, useEffect } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import TabsContainer from './Component/TabsContainer'
import Login from './Component/Login/Login'
import Dashboard from './Component/Login/Dashboard'
import Table from './Component/Login/Table'
import Add from './Component/Login/Add'
import Search from './Component/Login/Search'
import Stats from './Component/Login/Stats';
import "./Component/video.css"
import Orderconfirmation from './Component/orderconf'
import Maint from './Component/Login/Maint';
import Footer from './Component/footer'
import { connect } from 'react-redux'
import { keeplogIn } from '../src/Actions/action'
import Order from '../src/Component/OrderconfShowPage'

import './App.css'
const App = (props) => {
  useEffect(() => {
    props.checkAuth()
    //eslint-disable-next-line
  }, [])

  return (
    <BrowserRouter>
      <Fragment>
        <Nav />
        <main id='main'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resv" component={TabsContainer} />
            <Route path="/login" component={Login} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dashboard/add' component={Add} />
            <Route exact path='/dashboard/search' component={Search} />
            <Route exact path='/dashboard/stats' component={Stats} />
            <Route exact path='/dashboard/maint' component={Maint} />
            <Route path='/dashboard/:data' component={Table} />
            <Route path='/orderconfirmation' component={Orderconfirmation} />
            <Route path='/ordershowpage' component={Order} />
          </Switch>
        </main>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

const maptoprops = dispatch => {
  return {
    checkAuth: () => dispatch(keeplogIn())
  }
}

export default connect(null, maptoprops)(App);
