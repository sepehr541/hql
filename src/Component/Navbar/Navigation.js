import React, {useState, Fragment } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"


const Nav=(props)=>{
    const [rate,setrate]=useState(false)
    let checkratehandler=()=>{
        setrate(!rate)
    }
    return(
        <Fragment>
         <header className="Nav">
        <button onClick={()=>checkratehandler()}> Check your rate </button>
         </header>
         {rate ? <Checkrate />:null}
        </Fragment>





    )
}

export default Nav;