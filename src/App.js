import React, { Fragment } from 'react';
import Home from "./Component/Home"
import About from "./Component/About"
import Nav from "./Component/Navbar/Navigation"
import Reservation from "./Component/Reservation"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Rooms from "./Component/Rooms"
import "./Component/video.css"


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <div>
        <Nav />
        </div>
        <Route exact path="/" component={Home}/>
        <Switch>
        <Route path="/Rooms" component={Rooms}/>
        <Route path="/about" component={About}/>
          <Route path="/resv" component={Reservation}/>
        </Switch>
      </Fragment>
    </BrowserRouter>


  );
}

export default App;
