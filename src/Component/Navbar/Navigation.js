import React, {useState } from "react"
import "./Nav.css"


const Nav=(props)=>{
    const [rate,setrate]=useState
    let checkratehandler=()=>{

    }
    return(
         <header className="Nav">
         <div className="menu" onClick={props.toggle}>
         <div className="bar1"></div>
         <div className="bar2"></div>
         <div className="bar3"></div>
         <button onClick={}> Check your rate </button>
         </div>
         </header>




    )
}

export default Nav;