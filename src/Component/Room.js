import React, { Fragment } from "react"
import "./Room.css"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import {getting_type_price} from "../Actions/action"


const Room=(props)=>{
    
    var checkouthandler=()=>{
        props.getting_bed_price(props.bedtype,props.price)
        props.history.push("/resv")
    }
    
    return(
        <Fragment>
            <div>   
              <img src={props.source} alt ="" className="pic" />
            </div>
        <div className="Room">
            <header  className="type" >Room Type </header>
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

const maptoprops=dispatch=>{
    return{
        getting_bed_price:(bed,price)=>dispatch(getting_type_price(bed,price))
    }
}


export default connect(null,maptoprops)(withRouter(Room));