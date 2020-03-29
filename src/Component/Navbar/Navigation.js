import React, { useState, Fragment } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"
import { NavLink } from 'react-router-dom'
import "../video.css"
import Logo from '../../Logo.png'
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

    return (
        <Fragment>
                <header className="Nav">
                    <NavLink onClick={() => hideCheckBar()} to="/resv">Make a booking</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to='/' ><img src={Logo} id='logo'></img></NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <button onClick={() => setCheckBarVisibility()} className="btn"> Check your rate </button>
                </header>
                <Checkrate showCheck={true} />
        </Fragment>
    )
}

export default Nav;