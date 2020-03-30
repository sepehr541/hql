import React, { useState, Fragment } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"
import { NavLink } from 'react-router-dom'
import "../video.css"
import Logo from '../../Logo.png'
import {connect} from 'react-redux'
import {logOut} from '../../Actions/action'
// import Axios from "axios"
const Nav = (props) => {
    const [rate, setrate] = useState(false)

    let hideCheckBar = () => {
        setrate(false)
    }

    let setCheckBarVisibility = () => {
        let bar = document.getElementById("checkbar");
        if (!rate) {
            setrate(true);
            bar.style.top = "60px";
        } else {
            setrate(false)
            bar.style.top = "-60px";
        }
    }

    
    let dropdown=null

    console.log(props.token)

    if(props.token){
        dropdown=(
            <div className="dropdown">
            <button className="mainmenubtn">{props.username}</button>
            <div className="dropdown-child">
              <NavLink to='/dashboard'> Dashboard</NavLink>
              <NavLink to='/' onClick={props.LogOut}>Log Out</NavLink>
            </div>
          </div>
          
        )
    }
   
      
    return (
        <Fragment>
                <header className="Nav">
                    <NavLink onClick={() => hideCheckBar()} to="/resv">Make a booking</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to='/' ><img src={Logo} id='logo' alt='logo'></img></NavLink>
                    {props.token ? dropdown :<NavLink to='/login'>Login</NavLink>}
                    <button onClick={() => setCheckBarVisibility()} className="btn"> Check your rate </button>
                </header>
                <Checkrate showCheck={true} />
        </Fragment>
    )
}

const maptostate=state=>{
    return{
        username:state.user.username,
        token:state.user.token
    }
}
const maptoprops=dispatch=>{
    return{
        LogOut:()=>dispatch(logOut())
    }
}

export default connect(maptostate ,maptoprops)(Nav);