import React, { Fragment } from "react"
import "./Room.css"
import {withRouter} from "react-router-dom"


const Room=(props)=>{
    
    var checkouthandler=()=>{
        props.history.push("/resv")
    }
    
    return(
        <div className="Room">
            <header  className="type" >Room Type </header>
            <span className="from">From
                <span style={{position:"relative", right:"-30px"}}>{props.price}</span>
           </span>

            <Fragment>
            <div className="title">Bed Option</div>
            <div className="bed">{props.bedtype} </div>
            </Fragment>
            <button onClick={checkouthandler} className="checkout">Checkout</button>

        </div>
    )
}

export default withRouter(Room);