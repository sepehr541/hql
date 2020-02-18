import React, {Fragment} from 'react';
import Home from "./Component/Home"
import Nav from "./Component/Navbar/Navigation"
import {BrowserRouter} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
    <Fragment>
    <Nav/>
    <Home/>
    </Fragment>
    </BrowserRouter>
   
    
  );
}

export default App;
