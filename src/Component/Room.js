import React, { Fragment, useState } from "react"
import "./Room.css"
import {withRouter} from "react-router-dom"


const Room=(props)=>{
    const [roomId,setroomID]= useState(null)

    var checkouthandler=()=>{

        props.history.push({
            pathname:"/resv",
            search:`?${props.id}`,
            
        })
    }
    
    return(
        <Fragment id={props.id}>
        <div className="Room">
        <img src={props.source} alt ="" className="pic" />    
            <header  className="type" >Room is available</header>
            <span className="from">From
                <span style={{position:"relative", right:"-20px"}}>{props.price} $</span>
           </span>

            <Fragment>
            <div className="title">Bed Option</div>
            <div className="bed">{props.bedtype} </div>
            </Fragment>
            <button onClick={checkouthandler} className="checkout">Checkout</button>
        </div>
        </Fragment>
       
    )
}





export default withRouter(Room);
