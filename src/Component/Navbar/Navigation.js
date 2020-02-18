import React, { Fragment } from "react"
import "./Nav.css"


const Nav=(props)=>{
    return(
         <header className="Nav">
         <div className="menu" onClick={props.toggle}>
         <div className="bar1"></div>
         <div className="bar2"></div>
         <div className="bar3"></div>
         </div>
         </header>




    )
}

export default Nav;