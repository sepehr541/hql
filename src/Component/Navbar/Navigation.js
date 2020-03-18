import React, { useState, Fragment } from "react"
import "./Nav.css"
import Checkrate from "../CheckRate"
import { NavLink } from 'react-router-dom'
import "../video.css"

const Nav = (props) => {
    const [rate, setrate] = useState(false)

    let hideCheckBar = () => {
        setrate(false)
    }

    let setCheckBarVisibility = () => {
        // let bar = document.getElementById("checkbar");
        //you dont have to do that while u can use rate down there why  would chagnge the pixel while u can make it conditional!!

        // if (!rate) {
            setrate(!rate);
        //     bar.style.top = "45px";
        // } else {
        //     setrate(false)
        //     bar.style.top = "-60px";
        // }
    }

    return (
        <Fragment>
                <header className="Nav">
                    <NavLink onClick={() => hideCheckBar()} to="/resv">Make a booking</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <button onClick={() => setCheckBarVisibility()} className="btn"> Check your rate </button>
                </header>
               { rate? <Checkrate />: null}
        </Fragment>
    )
}

export default Nav;