import React, { Fragment } from "react"
import Room from "./Room"
import "./Rooms.css"
import bed from "../2bed.jpeg"
import bed3 from "../3bed.jpeg"
import Spinner from "./Spinner/Spinner"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"


// let arr = [{ price: 543, bedtype: "2 bed" }, { price: 345, bedtype: "1 bed" }, { price: 649, bedtype: "3 bed" }, { price: 450, bedtype: "2 bed" }]

const Rooms = (props) => {

    console.log(props.availableRooms);
    let roomAvailability
    if (props.availableRooms && props.availableRooms.length === 0) {
        roomAvailability = (
            <Fragment>
                <div>
                    <Spinner />
                </div>
                <div className="empty" >
                    You are being redirected to the main page because there is no room available to math your request
                </div>
            </Fragment>)

        setTimeout(() => {
            props.history.push("/")
        }, 4000);
    }
    if (props.availableRooms && props.availableRooms.length > 0) {
        roomAvailability = props.availableRooms.map(x => (
            <Room id={x.roomnumber} price={x.price} bedtype={x.bedtype} source={x.bedtype === 2 ? bed : bed3} />))
    } else if (!props.availableRooms) {
        roomAvailability = <div className="error"> Sorry there is no room available to match your request </div>
    }
    //these are for the boxes when you ca nsee for how many people and the date you chose
    let check_in
    let check_out
    if(props.checkin){
         check_in= props.checkin.toString().slice(4,15);
         check_out=props.checkout.toString().slice(4,15)
    }
    return (
            <Fragment>
                {/* <p style={{ marginTop: "100px", position: "relative", fontWeight: "bold", color: "red", marginLeft: "48%", zindex:"-1"}}>Suits</p> */}
                {roomAvailability}
                {/* </div> */}
            </Fragment>
    )
}

const maptostate=state=>{
    return{
        checkin:state.dates.check_in,
        checkout:state.dates.check_out,
        people:state.dates.people,
        availableRooms: state.resvinfo.availableRooms
    }
}



export default withRouter(connect(maptostate)(Rooms));
