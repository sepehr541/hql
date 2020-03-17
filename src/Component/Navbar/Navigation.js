import React, {useState, Fragment } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"
import {NavLink} from 'react-router-dom'
import "../video.css"

const Nav=(props)=>{
    const [rate,setrate]=useState(false)
    let checkratehandler=()=>{
        setrate(false)
    }

    let checkhandle=()=>{
        setrate(!rate)
    }

    return(
        <Fragment >
            <div >
            <header  className="Nav">
         <NavLink onClick={()=>checkratehandler()} to="/resv">Make a booking</NavLink>
         <NavLink to="/about">About Us</NavLink>
        <button onClick={()=>checkhandle()} className="btn"> Check your rate </button>
         </header>
       {rate ?<Checkrate showCheck={true}/>:null}
            </div>
     

        </Fragment>
    )
}

export default Nav;