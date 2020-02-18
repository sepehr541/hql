import React, {useState } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"


const Nav=(props)=>{
    const [rate,setrate]=useState(false)
    let checkratehandler=()=>{
        setrate(!rate)
    }
    return(
         <header className="Nav">
        
         <button onClick={()=>checkratehandler()}> Check your rate </button>
         {rate ? <Checkrate />:null}
         </header>




    )
}

export default Nav;