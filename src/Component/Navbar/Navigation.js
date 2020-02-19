import React, {useState, Fragment } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"
import {NavLink} from 'react-router-dom'

const Nav=(props)=>{
    const [rate,setrate]=useState(false)
    let checkratehandler=()=>{
        setrate(!rate)
    }
    return(
        <Fragment>
         <header className="Nav">
         <NavLink to="/resv">Make a booking</NavLink>
         <NavLink to="/about">About Us</NavLink>
        <button onClick={()=>checkratehandler()}> Check your rate </button>
         </header>
         <div>
       {rate ?<Checkrate/>:null}
         </div>
        </Fragment>
    )
}

export default Nav;