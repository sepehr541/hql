import React, { Fragment } from "react"
import Room from "./Room"
import "./Rooms.css"
import bed from "../2bed.jpeg"
import bed3 from "../3bed.jpeg"
import Spinner from "./Spinner/Spinner"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


// let arr = [{ price: 543, bedtype: "2 bed" }, { price: 345, bedtype: "1 bed" }, { price: 649, bedtype: "3 bed" }, { price: 450, bedtype: "2 bed" }]

const Rooms = (props) => {
    // {props.availableRooms ? props.availableRooms.map(x => (
    //     <Room price={x.price} bedtype={x.bedtype} source={x.bedtype === 2 ? bed : bed3} />
    // )):<div className="error"> Sorry there is no room available to match your request </div>}

console.log(props.availableRooms);
let roomAvailability
if(props.availableRooms && props.availableRooms.length===0){
        roomAvailability=(
        <Fragment> 
        <div>         
            <Spinner/>
        </div>
            <div className="empty" >
             You are being redirected to the main page because there is no room available to math your request
            </div> 
        </Fragment>)
        
   setTimeout(() => {
        props.history.push("/")
    }, 2000);
}
if(props.availableRooms && props.availableRooms.length>0){
    roomAvailability=props.availableRooms.map(x => (
        <Room price={x.price} bedtype={x.bedtype} source={x.bedtype === 2 ? bed : bed3}/>))
}else if(!props.availableRooms){
    roomAvailability=<div className="error"> Sorry there is no room available to match your request </div>
}
    return (
        <div className="Rooms">
            <Fragment>
                <header style={{ marginTop: "100px", position: "relative", fontWeight: "bold", color: "white", marginLeft: "48%" }}>Suits</header>
                {roomAvailability}
            </Fragment>
        </div>
    )
}

const maptostate=state=>{
    return{
        availableRooms:state.resvinfo.availableRooms
    }
}

export default withRouter(connect(maptostate)(Rooms));
